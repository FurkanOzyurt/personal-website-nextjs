import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Envelope, LinkedinLogo } from "phosphor-react";
import React, { FC } from "react";

const MainInformationCard: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div className="main-information-card">
      <div className="info-card card-style sticky">
        <div className="avatar">
          <Image
            src="/images/furkan-ozyurt.jpg"
            width={140}
            height={140}
            alt="Furkan Özyurt Avatar"
            layout="fill"
          />
        </div>
        <h2 className="full-name">
          {t("firstName")} {t("lastName")}
        </h2>
        <h5 className="title">{t("jobTitle")}</h5>
        <div className="divider w-full my-7"></div>
        <ul className="flex gap-4">
          <li>
            <a href="#" target="_blank">
              <LinkedinLogo size={24} weight="fill" />
            </a>
          </li>
        </ul>
        <div className="divider w-full my-7"></div>
        <div className="w-full other-information">
          <ul className="flex flex-col gap-4">
            <li>
              <span>{t("age")}:</span>
              <span className="data-value age">20</span>
            </li>
            <li>
              <span>{t("location")}:</span>
              <span className="data-value">IZMIR</span>
            </li>
          </ul>
        </div>
        <div className="divider w-full my-7"></div>
        <button className="fo-button uppercase gap-1">
          {t("contact")}
          <Envelope size={18} />
        </button>
      </div>
    </div>
  );
};
export default MainInformationCard;
