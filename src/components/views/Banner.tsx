import { useTranslation } from "next-i18next";
import Image from "next/image";
import { CaretRight } from "phosphor-react";
import React, { FC, PropsWithChildren } from "react";

interface IBannerCard extends PropsWithChildren {
  topTitle?: string;
  title?: string;
  breadcrumb?: Array<{ title: string; url: string }>;
}

const Banner: FC<IBannerCard> = (props) => {
  const { t } = useTranslation("common");
  const {
    topTitle = "myName",
    title = (
      <>
        Hello
        <br /> World !
      </>
    ),
    breadcrumb = [],
  } = props;
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
            <h4 className="banner-mini-title label">{t(topTitle)}</h4>
            <h2 className="banner-title label">{title}</h2>
            {breadcrumb?.length ? (
              <ul>
                {breadcrumb.map((breadcrumbItem, key) => {
                  return (
                    <>
                      <li>{t(breadcrumbItem.title)}</li>
                      {key !== breadcrumb?.length - 1 && (
                        <li>
                          <CaretRight size={16} weight="bold" />
                        </li>
                      )}
                    </>
                  );
                })}
              </ul>
            ) : undefined}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
