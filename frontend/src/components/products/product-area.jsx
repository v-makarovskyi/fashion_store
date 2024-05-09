import React, { useState } from "react";
import ErrorMsg from "@/components/common/error-message";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { TextShapeLine } from "@/svg";
import ProductItem from "./product-item";
import { HomePrdLoader } from "../loaders";

const tabs = ["All Collections", "Shoes", "Clothing", "Bags"];

const ProductArea = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({ type: "fashion" });

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  let content = null;
  if (isLoading) {
    content = <HomePrdLoader isLoading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg message="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg message="Products not found" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    let product_items = products.data;
    if (activeTab === "All Collection") {
      product_items = products.data;
    } else if (activeTab === "Shoes") {
      product_items = products.data.filter((p) => p.category.name === "Shoes");
    } else if (activeTab === "Clothing") {
      product_items = products.data.filter(
        (p) => p.category.name === "Clothing"
      );
    } else if (activeTab === "Bags") {
      product_items = products.data.filter((p) => p.category.name === "Bags");
    } else {
      product_items = products.data;
    }
    content = (
      <>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-product-tab tp-tab mb-50 text-center">
              <nav>
                <div className="nav nav-tabs justify-content-center">
                  {tabs.map((tab, i) => (
                    <button
                      key={i}
                      className={`nav-link text-capitalize ${
                        activeTab === tab ? "active" : ""
                      }`}
                      onClick={() => handleActiveTab(tab)}
                    >
                      {tab}
                      <span className="tp-product-tab-tooltip">{product_items.length}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          {product_items.map((product) => (
            <div
              key={product._id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <section className="tp-product-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper text-center mb-35">
                <span className="tp-section-title-pre">
                  All Product Shop
                  <TextShapeLine />
                </span>
                <h3 className="tp-section-title">
                  Customer Favorite Style Product
                </h3>
              </div>
            </div>
          </div>
          {content}
        </div>
      </section>
    </>
  );
};

export default ProductArea;
