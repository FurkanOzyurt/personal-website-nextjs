import React, { FC } from "react";
import { ServiceItemCard } from "@/components/";
import { useTranslation } from "next-i18next";

const Services: FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className="services mt-7">
      <h3 className="section-title">
        {t("skills")}
        <span data-number="02" className="divider"></span>
      </h3>

      <div className="flex flex-wrap -mx-4 mb-7">
        <ServiceItemCard
          title="mobileApplication"
          imageUrl="/images/icons/mobile-development.png"
          description="mobileApplicationDescription"
        />
        <ServiceItemCard
          title="webAppDevelop"
          imageUrl="/images/icons/web-development.png"
          description="webAppDevelopDescription"
        />
      </div>
    </section>
  );
};
export default Services;
