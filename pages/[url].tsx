import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { connect, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { wrapper } from "src/store/store";
import { Footer, Layout } from "src/layouts";
import { BlogCategoriesCard, BlogContentCard, Breadcrumb } from "@/components";
import {
  getBlogCategories,
  getBlogDetail,
} from "@/store/actions/contentActions";
import Head from "next/head";

const DOMAIN = "https://furkanozyurt.com";

const BlogContent: NextPage = (props) => {
  const { t, i18n } = useTranslation("common");
  const { blogDetail } = useSelector((state: any) => state.content);
  const router = useRouter();
  const { url } = router.query;
  const currentLocale = i18n.language;
  const blogTitle = blogDetail["title_" + currentLocale] || "";
  const canonicalUrl =
    currentLocale === "tr" ? `${DOMAIN}/tr/${url}` : `${DOMAIN}/${url}`;

  const title = `${blogTitle} | Furkan Özyurt`;
  const description = blogTitle;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogTitle,
    author: {
      "@type": "Person",
      name: blogDetail.author || "Furkan Özyurt",
    },
    datePublished: blogDetail.createdDate || "",
    url: canonicalUrl,
    publisher: {
      "@type": "Person",
      name: "Furkan Özyurt",
    },
  };

  return (
    <Layout>
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="article" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
        <Breadcrumb
          title={blogDetail["title_" + i18n.language]}
          breadcrumb={[
            {
              title: "home",
              url: "/",
            },
            {
              title: "blog",
              url: "/blog",
            },
            {
              title: blogDetail["title_" + i18n.language],
              url: "",
            },
          ]}
        />
        <div className="fo-container relative z-10">
          <div className="flex flex-wrap -mx-4 mb-7 mt-10 justify-center">
            <div className="lg:w-8/12 px-4">
              <BlogContentCard
                content={blogDetail["content_" + i18n.language]}
              />

              <Footer />
            </div>
            <div className="lg:w-4/12 w-full px-4">
              <BlogCategoriesCard />
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) =>
      async ({ req, res, locale, params, ...etc }) => {
        const url: string = params?.url as string;
        await store.dispatch(getBlogCategories() as any);
        if (url) {
          const result = await store.dispatch(getBlogDetail(url) as any);
          return !result
            ? {
                notFound: true,
              }
            : {
                props: {
                  ...(await serverSideTranslations(locale ?? "en", ["common"])),
                },
              };
        } else {
          return {
            notFound: true,
          };
        }
      }
  );

export default connect((state: any) => state)(BlogContent);
