import React from "react";
import Image from "next/image";
import { Tags } from "@/svg";
import Link from "next/link";

const BlogItem = ({ blog }) => {
  const { id, title, date, img, tags } = blog;

  return (
    <div className="tp-blog-item mb-40">
      <div className="tp-blog-top p-relative fix">
        <Link href={`/blog-details/${id}`}>
          <Image src={img} alt={`img-blog-${id}`} />
        </Link>
        <div className="tp-blog-item-date">
          <span>{date}</span>
        </div>
      </div>
      <div className="tp-blog-content has-thumbnail">
        <div className="tp-blog-tags">
          <span>
            <Tags />
          </span>
          {tags.map((t, i) => (
            <a key={i} href="#">
              {t}
              {i < tags.length - 1 && ","}
            </a>
          ))}
        </div>
        <h3 className="tp-blog-title">
          <Link href={`/blog-detail/${id}`}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogItem;
