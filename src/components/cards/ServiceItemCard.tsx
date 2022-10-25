import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface IServiceItemCard extends PropsWithChildren {
  title: string;
  description: string;
  buttonUrl?: string;
  buttonText?: string;
  imageUrl: string;
}

const ServiceItemCard: FC<IServiceItemCard> = (props) => {
  const {
    title,
    description,
    buttonText = "contact",
    buttonUrl = "/contact",
    imageUrl,
  } = props;
  const { t } = useTranslation("common");

  return (
    <div className="md:w-6/12 w-full px-4 mb-4">
      <div className="card-style service-item h-full">
        <div className="w-[60px]">
          <Image
            alt="Web Programcılığı"
            width={100}
            height={100}
            src={imageUrl}
            layout="responsive"
          />
        </div>
        <h4>{t(title)}</h4>
        <p>{t(description)}</p>
        <Link href={buttonUrl}>
          <a className="icon-link">
            {t(buttonText)} <i className="ph-arrow-right-bold"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceItemCard;
