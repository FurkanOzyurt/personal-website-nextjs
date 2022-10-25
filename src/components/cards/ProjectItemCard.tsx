import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";

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
          <Image width="500" height="500" layout="fill" src={imageUrl} />
        </a>
      </Link>

      <div className="info">
        <div>
          <h4 className="title">{title}</h4>
        </div>
        <div>
          <Link href={url}>
            <a className="fo-button-rounded">
              <i className="ph-magnifying-glass-plus-bold"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemCard;
