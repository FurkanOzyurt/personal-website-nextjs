import { useTranslation } from "next-i18next";
import { ArrowRight } from "phosphor-react";
import React, { FC } from "react";

interface IBlogContentCard {
  content: any;
}

const BlogContentCard: FC<IBlogContentCard> = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  return (
    <section className="blog-content mb-4">
      <div
        className="card-style"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </section>
  );
};

export default BlogContentCard;
