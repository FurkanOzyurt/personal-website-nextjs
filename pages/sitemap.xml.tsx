import type { GetServerSideProps } from "next";
import axios from "axios";
import { ROOT_URL } from "@/api/constants";

const DOMAIN = "https://furkanozyurt.com";

type SitemapUrl = {
  loc: string;
  alternates: { hreflang: string; href: string }[];
  changefreq: string;
  priority: string;
};

function generateSitemapXml(urls: SitemapUrl[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
${url.alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join("\n")}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

async function fetchAllBlogs(): Promise<any[]> {
  const allBlogs: any[] = [];

  try {
    const firstPage = await axios.get(`${ROOT_URL}blog/`, {
      params: { page: 0 },
    });

    const totalPages = firstPage.data?.paging?.totalPage ?? 1;
    if (firstPage.data?.content) {
      allBlogs.push(...firstPage.data.content);
    }

    for (let page = 1; page < totalPages; page++) {
      try {
        const response = await axios.get(`${ROOT_URL}blog/`, {
          params: { page },
        });
        if (response.data?.content) {
          allBlogs.push(...response.data.content);
        }
      } catch {
        // Skip failed pages
      }
    }
  } catch {
    // Return empty if API fails
  }

  return allBlogs;
}

async function fetchBlogCategories(): Promise<any[]> {
  try {
    const response = await axios.get(`${ROOT_URL}blogCategories/`);
    return response.data ?? [];
  } catch {
    return [];
  }
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const [blogs, categories] = await Promise.all([
    fetchAllBlogs(),
    fetchBlogCategories(),
  ]);

  const urls: SitemapUrl[] = [];

  // Home page
  urls.push({
    loc: DOMAIN,
    alternates: [
      { hreflang: "en", href: DOMAIN },
      { hreflang: "tr", href: `${DOMAIN}/tr` },
      { hreflang: "x-default", href: DOMAIN },
    ],
    changefreq: "monthly",
    priority: "1.0",
  });

  // Blog listing page
  urls.push({
    loc: `${DOMAIN}/blog`,
    alternates: [
      { hreflang: "en", href: `${DOMAIN}/blog` },
      { hreflang: "tr", href: `${DOMAIN}/tr/blog` },
      { hreflang: "x-default", href: `${DOMAIN}/blog` },
    ],
    changefreq: "weekly",
    priority: "0.8",
  });

  // Blog category pages
  for (const category of categories) {
    const categoryUrl = category.url_en || category.url;
    const categoryUrlTr = category.url_tr || categoryUrl;

    if (categoryUrl) {
      urls.push({
        loc: `${DOMAIN}/blog/${categoryUrl}`,
        alternates: [
          { hreflang: "en", href: `${DOMAIN}/blog/${categoryUrl}` },
          { hreflang: "tr", href: `${DOMAIN}/tr/blog/${categoryUrlTr}` },
          { hreflang: "x-default", href: `${DOMAIN}/blog/${categoryUrl}` },
        ],
        changefreq: "weekly",
        priority: "0.7",
      });
    }
  }

  // Individual blog posts
  for (const blog of blogs) {
    const urlEn = blog.url_en;
    const urlTr = blog.url_tr;

    if (urlEn) {
      urls.push({
        loc: `${DOMAIN}/${urlEn}`,
        alternates: [
          { hreflang: "en", href: `${DOMAIN}/${urlEn}` },
          { hreflang: "tr", href: `${DOMAIN}/tr/${urlTr || urlEn}` },
          { hreflang: "x-default", href: `${DOMAIN}/${urlEn}` },
        ],
        changefreq: "monthly",
        priority: "0.6",
      });
    }
  }

  const sitemap = generateSitemapXml(urls);

  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function SitemapPage() {
  return null;
}
