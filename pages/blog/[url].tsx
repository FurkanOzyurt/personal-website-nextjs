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

const BlogCategory: NextPage = (props) => {
  const { i18n } = useTranslation("common");
  const { blog } = useSelector((state: any) => state.content);
  const router = useRouter();
  const { url } = router.query;
  const currentLocale = i18n.language;
  const canonicalUrl =
    currentLocale === "tr"
      ? `${DOMAIN}/tr/blog/${url}`
      : `${DOMAIN}/blog/${url}`;

  const title = "Blog | Furkan Özyurt";
  const description =
    currentLocale === "tr"
      ? "Furkan Özyurt'un blog yazıları. Kategoriye göre filtrelenmiş içerikler."
      : "Blog posts by Furkan Özyurt. Articles filtered by category.";

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
                    <div className="flex flex-1 justify-center">{`İçeri bulunamadı.`}</div>
                  )}
                </div>
              </section>
              {blog?.content?.length ? (
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
              ) : (
                ""
              )}
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
        const category: any = query?.url ? query?.url : "";

        await store.dispatch(getBlogCategories() as any);

        const blogCategories = store.getState().content.blogCategories;
        const categoryData = blogCategories.filter((item: any, key: number) => {
          return item.url_en === category || item.url_tr === category;
        });
        if (categoryData?.length) {
          await store.dispatch(
            getBlogs({
              page,
              category,
            }) as any
          );
          return {
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

export default connect((state: any) => state)(BlogCategory);
