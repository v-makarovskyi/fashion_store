import React from "react";
import { Tags } from "@/svg";
import Link from "next/link";
import Image from "next/image";

export default function BlogItemTest({ blog }) {
  const { id, img, title, date, tags } = blog;

  return (
    <div className="blog-item mb-40">
      <div className="blog-item__top fix p-relative">
        <Link href={`/blog-details/${id}`}>
          <Image src={img} alt={`blog-img-${id}`} />
        </Link>
        <div className="blog-item__date">
          <span>{date}</span>
        </div>
      </div>
      <div className="blog-item__content has-thumbnail">
        <div className="blog-item__tags">
          <span>
            <Tags />
          </span>
          {tags.map((t, idx) => (
            <a href="#">
              {t}
              {idx < tags.length - 1 && ","}
            </a>
          ))}
        </div>
        <h3 className="blog-item__title">
          <Link href={`/blog-details/${id}`}>{title}</Link>
        </h3>
      </div>
    </div>
  );
}
