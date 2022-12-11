import { useTranslation } from "next-i18next";
import React, { FC } from "react";

import { ContactInformationCard } from "@/components/";

interface IContactInformationProps {}

const ContactInformation: FC<IContactInformationProps> = () => {
  const { t } = useTranslation("common");
  return (
    <section className="contact-information">
      <div className="flex flex-wrap -mx-4">
        <div className="px-4 md:w-6/12 w-full mb-4">
          <ContactInformationCard
            title="phone_number"
            content="+90 552 578 5966"
            url="tel:+90 552 578 5966"
            img_url="/images/icons/phone.svg"
          />
        </div>
        <div className="px-4 md:w-6/12 w-full mb-4">
          <ContactInformationCard
            title="email"
            content="furkanozyurt90@gmail.com"
            url="mailto:furkanozyurt90@gmail.com"
            img_url="/images/icons/email.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
