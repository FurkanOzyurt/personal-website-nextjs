import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import moment from "moment";
import NProgress from "nprogress";
import { Header } from "@/layouts";

import "moment/locale/tr";
import "nprogress/nprogress.css";
import { useTranslation } from "next-i18next";

interface ILayoutProps {
  children: JSX.Element;
}
moment.locale("en");
const Layout: FC<ILayoutProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const { i18n } = useTranslation("common");

  useEffect(() => {
    moment.locale(i18n.language);
  }, [i18n.language]);
  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <div className="wrapper">
      <Header />
      <main className="section-space">{children}</main>
    </div>
  );
};

export default Layout;
