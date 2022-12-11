import React, { FC } from "react";
import { ProjectItemCard } from "@/components/";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

const Projects: FC = () => {
  const { t, i18n } = useTranslation("common");
  const { projects } = useSelector((state: any) => state.content);
  return (
    <section className="projects">
      <h3 className="section-title">
        {t("myProjects")}
        <span data-number="04" className="divider"></span>
      </h3>

      <div className="flex flex-wrap -mx-4 mb-7">
        {projects.map((item: any, key: number) => {
          return (
            <div key={key} className="md:w-6/12 w-full px-4 mb-4">
              <ProjectItemCard
                title={item["title_" + i18n.language]}
                url={item["url_" + i18n.language]}
                imageUrl="/images/blog.jpeg"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
