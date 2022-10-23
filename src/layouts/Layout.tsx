import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = (props) => {
  const { children } = props;
  const router = useRouter();
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

  return <div>{children}</div>;
};

export default Layout;
