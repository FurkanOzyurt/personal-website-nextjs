import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { FC } from "react";
import { useSelector } from "react-redux";

const BlogCategoriesCard: FC = () => {
  const { i18n } = useTranslation("common");
  const { blogCategories } = useSelector((state: any) => state.content);
  return (
    <div className="card-style blog-sidebar">
      <h4 className="text-lg font-[800] mb-4">Kategoriler</h4>
      <ul>
        {blogCategories.map((item: any, key: number) => {
          return (
            <li key={key}>
              <Link href={`/blog/${item[`url_${i18n.language}`]}`}>
                <a>{item[`title_${i18n.language}`]}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BlogCategoriesCard;
