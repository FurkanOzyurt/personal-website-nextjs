import { useTranslation } from "next-i18next";
import React, { FC } from "react";

const About: FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="about">
      <h3 className="section-title">
        {t("about")}
        <span data-number="01" className="divider"></span>
      </h3>

      <div className="card-style">
        <blockquote className="italic">{t("aboutText")}</blockquote>
      </div>
    </section>
  );
};
export default About;
