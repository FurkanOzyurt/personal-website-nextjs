import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { connect } from "react-redux";

import { wrapper } from "src/store/store";
import { Footer, Layout } from "src/layouts";
import {
  Banner,
  ContactForm,
  ContactInformation,
  MainInformationCard,
} from "@/components";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const ContactPage: NextPage = (props) => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <>
        <Head>
          <title>İletişim | Furkan Özyurt</title>
        </Head>
        <Banner
          title={t("contact")}
          topTitle={""}
          breadcrumb={[
            {
              title: "home",
              url: "/",
            },
            {
              title: "Contact",
              url: "/contact",
            },
          ]}
        />
        <div className="fo-container relative z-10">
          <div className="flex flex-wrap -mx-4 mb-7 mt-10 justify-center">
            <div className="lg:w-4/12 md:w-7/12 w-full px-4">
              <MainInformationCard />
            </div>
            <div className="lg:w-8/12 px-4">
              <ContactInformation />
              <ContactForm />
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
        return {
          props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
          },
        };
      }
  );

export default connect((state: any) => state)(ContactPage);
