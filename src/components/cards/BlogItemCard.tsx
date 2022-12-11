import Link from "next/link";
import moment from "moment";
import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";

interface IBlogItemCard extends PropsWithChildren {
  title: string;
  url: string;
  imageUrl: string;
  author: string;
  date: Date;
  categories: Array<number | string>;
}

const BlogItemCard: FC<IBlogItemCard> = (props) => {
  const { title, url, author, date = new Date(), categories = [] } = props;
  const { i18n } = useTranslation("common");
  const { blogCategories } = useSelector((state: any) => state.content);

  return (
    <div className="blog-item">
      <Link href={"/" + url}>
        <a className="thumbnail">
          <Image
            width="500"
            height="500"
            layout="fill"
            alt={title}
            src="/images/blog.jpeg"
          />
        </a>
      </Link>

      <div className="card-style h-full">
        <div className="category">
          {categories?.map((item: number | string, key: number) => {
            const category = blogCategories.filter(
              (category: any) => category.id === item
            )?.[0];
            if (category) {
              return (
                <Link
                  key={key}
                  href={"/blog/" + category[`url_${i18n.language}`]}
                >
                  <a>{category[`title_${i18n.language}`]}</a>
                </Link>
              );
            }
          })}
        </div>
        <h4>
          <Link href={"/" + url}>
            <a>{title}</a>
          </Link>
        </h4>
        <div className="divider mb-4"></div>
        <ul className="card-data">
          <li>{moment(date).format("DD MMM YYYY")}</li>
          <li>{author}</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogItemCard;
