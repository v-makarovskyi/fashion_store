//scss file path frontend/public/assets/scss/layout/ecommerce/_product.scss

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cart, CompareThree, QuickView, Wishlist } from "@/svg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { Rating } from "react-simple-star-rating";

const ProductItem = ({ product }) => {
  const { _id, img, title, reviews, price, discount, tags, status, slug } =
    product || {};
  const { cart_items } = useSelector((state) => state.cart);
  const [ratingVal, setRatingVal] = useState(0);

  const dispatch = useDispatch();

  const isAddedToCart = cart_items?.some((item) => item._id === _id);

  const handleAddToCartProduct = (p) => {
    dispatch(addToCart(p));
  };

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const rating =
        reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
      setRatingVal(rating);
    } else {
      setRatingVal(0);
    }
  }, [reviews]);

  return (
    <div className="tp-product-item mb-40">
      <div className="tp-product-thumb p-relative z-index-1 fix">
        <Link
          className="tp-product-image-wrapper"
          href={`/product-details/${slug}`}
        >
          <Image
            src={img}
            alt={`product-image-${slug}`}
            width={284}
            height={302}
          />
        </Link>
        <div className="tp-product-badge">
          {status === "out of stock" && (
            <span className="product-hot">out-stock</span>
          )}
        </div>
        {/*  product actions */}
        <div className="tp-product-action tp-product-action-blackStyle">
          <div className="tp-product-action-item d-flex flex-column">
            {isAddedToCart ? (
              <Link
                href="/cart"
                className={`tp-product-action-btn ${
                  isAddedToCart ? "active" : ""
                } tp-product-add-cart-btn`}
              >
                <Cart />
                <span className="tp-product-tooltip tp-product-tooltip-right">
                  View Cart
                </span>
              </Link>
            ) : (
              <button
                className={`tp-product-action-btn ${
                  isAddedToCart ? "active" : ""
                } tp-product-add-cart-btn`}
                onClick={() => handleAddToCartProduct(product)}
                disabled={status === "out-of-stock"}
              >
                <Cart />
                <span className="tp-product-tooltip tp-product-tooltip-right">
                  Add To Cart
                </span>
              </button>
            )}
            <button
              onClick={() => dispatch(handleProductModal(product))}
              className="tp-product-action-btn tp-product-quick-view-btn"
            >
              <QuickView />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Quick View
              </span>
            </button>
            <button
              className={`tp-product-action-btn tp-product-add-to-wishlist-btn`}
            >
              <Wishlist />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Add to WishList
              </span>
            </button>
            <button
              disabled={status === "out-of-stock"}
              className="tp-product-action-btn tp-product-add-to-compare"
            >
              <CompareThree />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Add To Compare
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="tp-product-content pt-15">
        <div className="tp-product-tags">
          {tags.map((t, i) => (
            <a key={i} href="#">
              {t}
              {i < tags.length - 1 && ","}
            </a>
          ))}
        </div>
        <h3 className="tp-product-title">
          <Link href={`/product-details/${slug}`}>
            {title.substring(0, 21)}...
          </Link>
        </h3>
        <div className="tp-product-rating-icon">
          <Rating
            initialValue={ratingVal}
            readonly={false}
            allowFraction
            size={16}
          />
        </div>
        <div className="tp-ptoduct-price-wrapper">
          {discount > 0 ? (
            <>
              <span className="tp-product-price new-price">
                $
                {(
                  Number(price) -
                  (Number(price) * Number(discount)) / 100
                ).toFixed(2)}
              </span>{" "}
              <span className="tp-product-price old-price">
                ${price.toFixed(2)}{" "}
              </span>
            </>
          ) : (
            <span className="tp-product-price new-price">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
