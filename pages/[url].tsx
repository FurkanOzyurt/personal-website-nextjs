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

const BlogContent: NextPage = (props) => {
  const { t, i18n } = useTranslation("common");
  const { blogDetail } = useSelector((state: any) => state.content);
  const router = useRouter();
  return (
    <Layout>
      <>
        <Head>
          <title>{blogDetail["title_" + i18n.language]} | Furkan Özyurt</title>
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
