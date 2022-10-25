import Link from "next/link";
import moment from "moment";
import { FC, PropsWithChildren } from "react";

interface IBlogItemCard extends PropsWithChildren {
  title: string;
  url: string;
  imageUrl: string;
  author: string;
  date: Date;
  categories: string;
}

const BlogItemCard: FC<IBlogItemCard> = (props) => {
  const { title, url, author, date = new Date(), categories } = props;
  return (
    <div className="blog-item">
      <Link href={url}>
        <a className="thumbnail">
          <img
            width="500"
            height="500"
            src="https://elanta.app/nazar/trueman-demo/light/img/blog/b1.jpg"
          />
        </a>
      </Link>

      <div className="card-style h-full">
        <div className="category">{categories}</div>
        <h4>
          <Link href={url}>
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
