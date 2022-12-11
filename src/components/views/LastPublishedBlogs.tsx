import React, { FC } from "react";
import { BlogItemCard } from "@/components/";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

const LastPublishedBlogs: FC = () => {
  const { t, i18n } = useTranslation("common");
  const { blog } = useSelector((state: any) => state.content);
  return (
    <section className="blog">
      <h3 className="section-title">
        {t("lastPublishedBlogs")}
        <span data-number="03" className="divider"></span>
      </h3>

      <div className="flex flex-wrap -mx-4 mb-7">
        {blog?.length
          ? blog?.map((item: any, key: number) => {
              return (
                <div key={key} className="md:w-6/12 w-full px-4 mb-4">
                  <BlogItemCard
                    title={item["title_" + i18n.language]}
                    author={item["author"]}
                    categories={item["categories"]}
                    date={item.createdDate}
                    url={item["url_" + i18n.language]}
                    imageUrl="/images/blog.jpeg"
                  />
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};
export default LastPublishedBlogs;
