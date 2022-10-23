import type { GetServerSideProps, NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

import { wrapper } from "src/store/store";
import { getMyUserData } from "src/store/actions/userActions";
import { Layout } from "src/layouts";

const Home: NextPage = (props) => {
  const { t } = useTranslation("home");
  const { userData } = useSelector((state: any) => state.user);
  return (
    <Layout>
      <div>
        <div>{t(`h1`)}</div>
        <div>{userData.name}</div>
      </div>
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
            ...(await serverSideTranslations(locale ?? "en", ["home"])),
          },
        };
      }
  );

export default connect((state: any) => state)(Home);
