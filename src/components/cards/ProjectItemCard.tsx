import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassPlus } from "phosphor-react";

interface IProjectItemCard extends PropsWithChildren {
  title: string;
  url: string;
  imageUrl: string;
}

const ProjectItemCard: FC<IProjectItemCard> = (props) => {
  const { title, url, imageUrl } = props;
  return (
    <div className="project-item">
      <Link href={url}>
        <a className="thumbnail">
          <Image
            width="500"
            height="500"
            layout="responsive"
            src={imageUrl}
            alt={title}
          />
        </a>
      </Link>

      <div className="info">
        <div>
          <h4 className="title">{title}</h4>
        </div>
        <div>
          <Link href={url}>
            <a className="fo-button-rounded">
              <MagnifyingGlassPlus size={16} weight="bold" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemCard;
