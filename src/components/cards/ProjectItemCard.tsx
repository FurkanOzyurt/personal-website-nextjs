import React, { FC, PropsWithChildren } from "react";
import { ArrowSquareOut } from "phosphor-react";

interface IProjectItemCard extends PropsWithChildren {
  title: string;
  description: string;
  url: string;
  tech: string;
}

const ProjectItemCard: FC<IProjectItemCard> = (props) => {
  const { title, description, url, tech } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="project-item card-style block h-full"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-[700] text-base">{title}</h4>
        <ArrowSquareOut size={18} weight="bold" className="flex-shrink-0 mt-1" />
      </div>
      <p className="text-sm text-light-supText mb-3">{description}</p>
      <span className="text-xs text-light-supText opacity-70">{tech}</span>
    </a>
  );
};

export default ProjectItemCard;
