import { useTranslation } from "next-i18next";
import React, { FC } from "react";

interface IFooterProps {}

const Footer: FC<IFooterProps> = (props) => {
  const { t } = useTranslation("common");
  return (
    <footer>
      <div className="card-style">
        <div className="footer-content">
          <div>{t("copyright")}</div>
          <div className="lgx:hidden">
            Developer:
            <span className="text-primary">
              {t("firstName")} {t("lastName")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
