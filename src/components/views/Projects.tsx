import React, { FC } from "react";
import { ProjectItemCard } from "@/components/";
import { useTranslation } from "next-i18next";

const Projects: FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className="projects">
      <h3 className="section-title">
        {t("myProjects")}
        <span data-number="04" className="divider"></span>
      </h3>

      <div className="flex flex-wrap -mx-4 mb-7">
        <div className="md:w-6/12 w-full px-4 mb-4">
          <ProjectItemCard
            title="Project 1"
            url="'/project"
            imageUrl="/images/blog.jpeg"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
