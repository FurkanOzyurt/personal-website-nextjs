import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import React, { FC } from "react";

const MainInformationCard: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div className="main-information-card">
      <div className="info-card card-style sticky">
        <div className="avatar">
          <Image
            src="/images/furkan-ozyurt.jpeg"
            alt="Furkan Özyurt Avatar"
            fill
          />
        </div>
        <h2 className="full-name">
          {t("firstName")} {t("lastName")}
        </h2>
        <h5 className="title">{t("jobTitle")}</h5>
        <div className="divider w-full my-7"></div>
        <ul className="flex gap-4">
          <li>
            <a href="https://linkedin.com/in/furkan-ozyurt/" target="_blank" rel="noreferrer">
              <LinkedinLogo size={24} weight="fill" />
            </a>
          </li>
          <li>
            <a href="https://github.com/FurkanOzyurt" target="_blank" rel="noreferrer">
              <GithubLogo size={24} weight="fill" />
            </a>
          </li>
          <li>
            <a href="mailto:furkanozyurt90@gmail.com">
              <Envelope size={24} weight="fill" />
            </a>
          </li>
        </ul>
        <div className="divider w-full my-7"></div>
        <div className="w-full other-information">
          <ul className="flex flex-col gap-4">
            <li>
              <span>{t("experience")}:</span>
              <span className="data-value">{new Date().getFullYear() - 2020}+ {t("years")}</span>
            </li>
          </ul>
        </div>
        <div className="divider w-full my-7"></div>
        <a href="mailto:furkanozyurt90@gmail.com" className="fo-button uppercase gap-1">
          {t("contact")}
          <Envelope size={18} />
        </a>
      </div>
    </div>
  );
};
export default MainInformationCard;
