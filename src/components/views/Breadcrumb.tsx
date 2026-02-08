import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "phosphor-react";
import React, { FC, Fragment } from "react";

interface IBreadcrumbProps {
  title: string;
  breadcrumb: Array<{ title: string; url: string }>;
}

const Breadcrumb: FC<IBreadcrumbProps> = (props) => {
  const { t } = useTranslation("common");
  const { title, breadcrumb = [] } = props;
  return (
    <section className="banner breadcrumbs">
      <Image
        src="/images/banner.jpg"
        className="overlay-bg"
        alt="Banner"
        priority
        fill
      />
      <div className="fo-container relative z-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 text-center">
            <h2 className="banner-title label">{t(title)}</h2>
            <ul>
              {breadcrumb.map((breadcrumbItem, key) => {
                return (
                  <Fragment key={key}>
                    <li>
                      {breadcrumbItem.url ? (
                        <Link href={breadcrumbItem.url}>
                          {t(breadcrumbItem.title)}
                        </Link>
                      ) : (
                        t(breadcrumbItem.title)
                      )}
                    </li>
                    {key !== breadcrumb?.length - 1 && (
                      <li>
                        <CaretRight size={16} weight="bold" />
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
