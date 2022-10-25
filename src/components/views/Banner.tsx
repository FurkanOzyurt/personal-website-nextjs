import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { FC } from "react";

const Banner: FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className="banner">
      <Image
        src="/images/banner.jpg"
        className="overlay-bg"
        width={1920}
        height={1080}
        alt="Banner"
        priority
        layout="fill"
      />
      <div className="fo-container relative z-10">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-4/12 w-full px-4"></div>
          <div className="lg:w-8/12 w-full px-4 lg:-mt-0 -mt-8">
            <h4 className="banner-mini-title label">{t("myName")}</h4>
            <h2 className="banner-title label">
              Hello
              <br />
              World !
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
