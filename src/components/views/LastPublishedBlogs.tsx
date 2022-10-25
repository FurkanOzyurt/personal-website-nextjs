import React, { FC } from "react";
import { BlogItemCard } from "@/components/";
import { useTranslation } from "next-i18next";

const LastPublishedBlogs: FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className="blog">
      <h3 className="section-title">
        {t("lastPublishedBlogs")}
        <span data-number="03" className="divider"></span>
      </h3>

      <div className="flex flex-wrap -mx-4 mb-7">
        <div className="md:w-6/12 w-full px-4 mb-4">
          <BlogItemCard
            title="Create your own beauty blog with Trueman"
            author="Furkan Ö."
            categories="Next.js"
            date={new Date()}
            url={"create-your-own"}
            imageUrl="/images/blog.jpeg"
          />
        </div>
        <div className="md:w-6/12 w-full px-4 mb-4">
          <BlogItemCard
            title="Create your own beauty blog with Trueman"
            author="Furkan Ö."
            categories="Next.js"
            date={new Date()}
            url={"create-your-own"}
            imageUrl="/images/blog.jpeg"
          />
        </div>
      </div>
    </section>
  );
};
export default LastPublishedBlogs;
