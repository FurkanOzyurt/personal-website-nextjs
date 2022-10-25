import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { connect } from "react-redux";

import { wrapper } from "src/store/store";
import { getMyUserData } from "src/store/actions/userActions";
import { Footer, Layout } from "src/layouts";
import {
  About,
  Banner,
  Divider,
  LastPublishedBlogs,
  MainInformationCard,
  Projects,
  Services,
} from "@/components";

const Home: NextPage = (props) => {
  return (
    <Layout>
      <>
        <Banner />
        <div className="fo-container relative z-10">
          <div className="flex flex-wrap -mx-4 mb-7 mt-10 justify-center">
            <div className="lg:w-4/12 md:w-7/12 w-full px-4">
              <MainInformationCard />
            </div>
            <div className="lg:w-8/12 px-4">
              <About />
              <Services />
              <LastPublishedBlogs />
              <Projects />
              <Divider />
              <Footer />
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
      async ({ req, res, locale, ...etc }) => {
        await store.dispatch(getMyUserData() as any);
        return {
          props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
          },
        };
      }
  );

export default connect((state: any) => state)(Home);
