import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { connect, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { wrapper } from "src/store/store";
import { Footer, Layout } from "src/layouts";
import { BlogItemCard, Breadcrumb, BlogCategoriesCard } from "@/components";
import { getBlogCategories, getBlogs } from "@/store/actions/contentActions";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { CaretLeft, CaretRight } from "phosphor-react";
import Head from "next/head";

const DOMAIN = "https://furkanozyurt.com";

const Blog: NextPage = (props) => {
  const { i18n } = useTranslation("common");
  const { blog } = useSelector((state: any) => state.content);
  const router = useRouter();
  const currentLocale = i18n.language;
  const canonicalUrl =
    currentLocale === "tr" ? `${DOMAIN}/tr/blog` : `${DOMAIN}/blog`;

  const title = "Blog | Furkan Özyurt";
  const description =
    currentLocale === "tr"
      ? "Furkan Özyurt'un blog yazıları. Web geliştirme, frontend teknolojileri ve yazılım üzerine içerikler."
      : "Blog posts by Furkan Özyurt. Articles on web development, frontend technologies and software.";

  return (
    <Layout>
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en" href={`${DOMAIN}/blog`} />
          <link rel="alternate" hrefLang="tr" href={`${DOMAIN}/tr/blog`} />
          <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/blog`} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Head>
        <Breadcrumb
          title="blogs"
          breadcrumb={[
            {
              title: "home",
              url: "",
            },
            {
              title: "blog",
              url: "",
            },
          ]}
        />
        <div className="fo-container relative z-10">
          <div className="flex flex-wrap -mx-4 mb-7 mt-10 justify-center">
            <div className="lg:w-8/12 px-4">
              <section className="blog">
                <div className="flex flex-wrap -mx-4 mb-7">
                  {blog?.content?.length ? (
                    blog?.content?.map((item: any, key: number) => {
                      return (
                        <div key={key} className="md:w-6/12 w-full px-4 mb-4">
                          <BlogItemCard
                            key={item["url_" + i18n.language] + " " + key}
                            title={item["title_" + i18n.language]}
                            author={item["author"]}
                            categories={item["categories"]}
                            date={item.createdDate}
                            url={item["url_" + i18n.language]}
                            imageUrl="/images/blog.jpeg"
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div className="self-center">{`İçeri bulunamadı.`}</div>
                  )}
                </div>
              </section>
              <ReactPaginate
                className={"pagination"}
                breakLabel="..."
                previousLabel={<CaretLeft size={16} weight="bold" />}
                nextLabel={<CaretRight size={16} weight="bold" />}
                pageClassName={"pagination-item"}
                previousClassName={"pagination-item"}
                nextClassName={"pagination-item"}
                activeClassName={"active"}
                onPageChange={(e) => {
                  router.push({
                    pathname: "/blog",
                    query: { page: e.selected + 1 },
                  });
                }}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={
                  blog?.paging?.totalPage ? blog?.paging?.totalPage : 0
                }
              />
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
      async ({ req, res, locale, query, ...etc }) => {
        const page: any = query?.page ? query?.page : 1;
        await store.dispatch(
          getBlogs({
            page,
          }) as any
        );
        await store.dispatch(getBlogCategories() as any);
        return {
          props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
          },
        };
      }
  );

export default connect((state: any) => state)(Blog);
