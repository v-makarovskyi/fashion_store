import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { TextShapeLine } from "@/svg";
import ErrorMsg from "../common/error-message";
import { HomePopularProductLoader } from "../loaders/home/home-popular-prd-loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { useGetPopularProductByTypeQuery } from "@/redux/features/productApi";
import { notifyError } from "@/utils/toast";

const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: false,
  centeredSlides: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragClass: "tp-swiper-scrollbar-drag",
    snapOnRelease: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const PopularProducts = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetPopularProductByTypeQuery("fashion");
  const { cart_items } = useSelector((state) => state.cart);
  const dispatch = useDispatch;

  const handleAddProduct = (product) => {
    if (product.status === "out-of-stock") {
      notifyError("This product out-of-stock");
    }
    dispatch(addToCart(product));
  };

  let content = null;
  if (isLoading) {
    content = <HomePopularProductLoader isLoading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg message="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg message="Products not found!" />;
  }
  if (!isLoading && !isError && products.data?.length > 0) {
    const PRODUCTS_ITEMS = products.data;
    content = (
      <Swiper
        {...slider_setting}
        modules={[Scrollbar]}
        className="tp-category-slider-active swiper-container mb-50"
      >
        {PRODUCTS_ITEMS.map((product) => (
          <SwiperSlide
            key={product._id}
            className="tp-category-item p-relative z-index-1 text-center"
          >
            <div className="tp-category-thumb">
              <Link href={`/product-details/${product.slug}`}>
                <Image
                  src={product.img}
                  alt={`product-img-${product.slug}`}
                  width={224}
                  height={260}
                />
              </Link>
            </div>
            <div className="tp-category-content">
              <span>From ${product.price}</span>
              <h3 className="tp-category-title">
                <Link href={`/product-details/${product.slug}`}>
                  {product.title.substring(0, 15)}...
                </Link>
              </h3>
              <div className="tp-category-btn">
                {cart_items.some((item) => item._id === product.id) ? (
                  <Link
                    href="/cart"
                    className="tp-btn tp-btn-border cursor-pointer"
                  >
                    View Cart
                  </Link>
                ) : (
                  <a
                    className="tp-btn tp-btn-border cursor-pointer"
                    onClick={() => handleAddProduct(product)}
                  >
                    Add to Cart
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <>
      <section className="tp-category-area pb-95 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper text-center mb-50">
                <span className="tp-section-title-pre">
                  Shop By Popular
                  <TextShapeLine />
                </span>
                <h3 className="tp-section-title">
                  Popular on the Fashion Store
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-category-slider p-relative">
                {content}
                <div className="swiper-scrollbar tp-swiper-scrollbar tp-swiper-scrollbar-drag"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
