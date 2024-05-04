//scss file path: frontend/public/assets/scss/layout/ecommerce/_banner.scss

import React from "react";
import { HomeCateLoader } from "../loaders";
import ErrorMsg  from "../common/error-message";
import { useGetProductTypeCategoryQuery } from "@/redux/features/categoryApi";
import { ArrowRightLong } from "@/svg";
import { useRouter } from "next/router";

const FashionCategory = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetProductTypeCategoryQuery("fashion");
  const router = useRouter();

  const handleCategoryRoute = (title) => {
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };

  let content = null;
  if (isLoading) {
    content = <HomeCateLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg message="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg message="No categories found" />;
  }
  if (!isLoading && !isError && categories?.result?.length > 0) {
    const CATEGORIES_ITEMS = categories?.result;
    content = CATEGORIES_ITEMS?.map((cat) => (
      <div key={cat._id} className="col-xxl-4 col-lg-6">
        <div className="tp-banner-item p-relative z-index-1 grey-bg-2 mt-20 fix">
          <div
            className="tp-banner-thumb include-bg transition-3"
            style={{ backgroundImage: `url(${cat.img})` }}
          ></div>
          <h3 className="tp-banner-title">
            <a
              className="cursor-pointer"
              onClick={() => handleCategoryRoute(cat.parent)}
            >
              {cat.parent}
            </a>
          </h3>
          <div className="tp-banner-btn">
            <a onClick={() => handleCategoryRoute(cat.parent)} className="cursor-pointer tp-btn tp-btn-border tp-btn-border-sm">
              Shop now <ArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section className="tp-banner-area mb-20">
      <div className="container-fluid tp-gx-40">
        <div className="row tp-gx-20">{content}</div>
      </div>
    </section>
  );
};

export default FashionCategory;
