import { useTranslation } from "next-i18next";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";
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
    buttonUrl = "mailto:furkanozyurt90@gmail.com",
    imageUrl,
  } = props;
  const { t } = useTranslation("common");

  return (
    <div className="md:w-6/12 w-full px-4 mb-4">
      <div className="card-style service-item h-full">
        <div className="w-[60px]">
          <Image
            alt={t(title)}
            width={100}
            height={100}
            src={imageUrl}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <h4>{t(title)}</h4>
        <p>{t(description)}</p>
        <a href={buttonUrl} className="icon-link">
          {t(buttonText)} <ArrowRight size={12} weight="bold" />
        </a>
      </div>
    </div>
  );
};

export default ServiceItemCard;
