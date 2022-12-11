import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

interface IContactInformationCard extends PropsWithChildren {
  title: string;
  content: string;
  url: string;
  img_url: string;
}

const ContactInformationCard: FC<IContactInformationCard> = (props) => {
  const { t } = useTranslation("common");
  const { title, content, url, img_url } = props;
  return (
    <div className="card-style">
      <div className="w-14">
        <Image src={img_url} width="50" height="50" layout={"responsive"} />
      </div>
      <h4 className="mt-5 font-[700]">{t(title)}</h4>
      <a className="text-sm mt-2" href={url}>
        {content}
      </a>
    </div>
  );
};

export default ContactInformationCard;
