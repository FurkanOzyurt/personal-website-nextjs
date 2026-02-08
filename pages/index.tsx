import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { connect } from "react-redux";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { wrapper } from "src/store/store";
import { Footer, Layout } from "src/layouts";
import {
  About,
  AiAgent,
  Banner,
  Divider,
  LastPublishedBlogs,
  MainInformationCard,
  Projects,
  Services,
} from "@/components";
import { getHomeData } from "@/store/actions/contentActions";
import Head from "next/head";

const DOMAIN = "https://furkanozyurt.com";

const Home: NextPage = (props) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const currentLocale = i18n.language;
  const canonicalUrl = currentLocale === "tr" ? `${DOMAIN}/tr` : DOMAIN;

  const title = "Furkan Özyurt | Frontend Developer";
  const description =
    currentLocale === "tr"
      ? "Furkan Özyurt - Frontend Developer. Modern web teknolojileri ile kullanıcı dostu arayüzler geliştiriyorum."
      : "Furkan Özyurt - Frontend Developer. Building user-friendly interfaces with modern web technologies.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Furkan Özyurt",
        url: DOMAIN,
        jobTitle: "Frontend Developer",
        sameAs: [
          "https://github.com/FurkanOzyurt",
          "https://linkedin.com/in/furkanozyurt",
        ],
      },
      {
        "@type": "WebSite",
        name: "Furkan Özyurt",
        url: DOMAIN,
        inLanguage: ["en", "tr"],
      },
    ],
  };

  return (
    <Layout>
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en" href={DOMAIN} />
          <link rel="alternate" hrefLang="tr" href={`${DOMAIN}/tr`} />
          <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`${DOMAIN}/images/furkan-ozyurt.jpeg`}
          />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={`${DOMAIN}/images/furkan-ozyurt.jpeg`}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>
        <Banner />
        <div className="fo-container relative z-10">
          <div className="flex flex-wrap -mx-4 mb-7 mt-10 justify-center">
            <div className="lg:w-4/12 md:w-7/12 w-full px-4">
              <MainInformationCard />
            </div>
            <div className="lg:w-8/12 px-4">
              <About />
              <AiAgent />
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
        await store.dispatch(getHomeData() as any);
        return {
          props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
          },
        };
      }
  );

export default connect((state: any) => state)(Home);
