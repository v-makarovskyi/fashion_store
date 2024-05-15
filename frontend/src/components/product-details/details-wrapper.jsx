import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { handleModalClose } from "@/redux/features/productModalSlice";
import DetailsBottomInfo from "./details-bottom-info";
import ProductQuantity from "./product-quantity";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import { CompareTwo, WishlistTwo, AskQuestion } from "@/svg";

const DetailsWrapper = ({ product, activeImg, onHandleActiveImage }) => {
  const {
    category,
    title,
    status,
    reviews,
    description,
    discount,
    price,
    imageURLs,
  } = product;
  const dispatch = useDispatch();
  const [ratingVal, setRatingVal] = useState(0);
  const [textMore, setTextMore] = useState(false);

  const handleAddToCartProduct = (prod) => {
    dispatch(addToCart(prod));
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
    <div className="tp-product-details-wrapper">
      <div className="tp-product-details-category">
        <span>{category.name}</span>
      </div>
      <h3 className="tp-product-details-title">{title}</h3>
      <div className="tp-product-details-inventory d-flex align-items-center mb-10">
        <div className="tp-product-details-stock mb-10">
          <span>{status}</span>
        </div>
        <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
          <div className="tp-product-details-rating">
            <Rating
              allowFraction
              size={16}
              initialValue={ratingVal}
              readonly={true}
            />
          </div>
          <div className="tp-product-details-reviews">
            <span>
              ({reviews && reviews.length > 0 ? reviews.length : 0} Reviews)
            </span>
          </div>
        </div>
      </div>
      <p>
        {textMore ? description : `${description.substring(0, 100)}...`}
        <span onClick={() => setTextMore(!textMore)}>
          {textMore ? "See less" : "See more"}
        </span>
      </p>
      {/*  price start */}
      <div className="tp-product-details-price-wrapper mb-20">
        {discount ? (
          <>
            <span className="tp-product-details old-price">${price}</span>{" "}
            <span className="tp-product-details new-price">
              {" "}
              ${(Number(price) - (Number(price) * discount) / 100).toFixed(2)}
            </span>
          </>
        ) : (
          <span className="tp-product-details new-price">
            ${price.toFixed(2)}
          </span>
        )}
      </div>
      {/*  selection color options */}
      {imageURLs.some((item) => item?.color && item.color?.name) && (
        <div className="tp-product-details-variation">
          <div className="tp-product-details-variation-item">
            <h4 className="tp-product-details-variation-title">Color: </h4>
            <div className="tp-product-details-variation-list">
              {imageURLs.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => onHandleActiveImage(item)}
                  className={`color tp-color-variation-btn ${
                    item.img === activeImg ? "active" : ""
                  }`}
                >
                  <span
                    data-bg-color={`${item.color.clrCode}`}
                    style={{
                      backgroundColor: `${item.color.clrCode}`,
                    }}
                  ></span>
                  {item.color && item.color.name && (
                    <span className="tp-color-variation-tooltip">
                      {item.color.name}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/*  actions */}
      <div className="tp-product-details-action-wrapper">
        <h3 className="tp-product-details-action-title">Quantity</h3>
        <div className="tp-product-details-action-item-wrapper d-sm-flex align-items-center">
          <ProductQuantity />
          <div className="tp-product-details-add-to-cart mb-15 w-100">
            <button
              className="tp-product-details-add-to-cart-btn w-100"
              onClick={() => handleAddToCartProduct(product)}
              disabled={status === "out-of-stock"}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <Link href="/cart" onClick={() => dispatch(handleModalClose())}>
          <button className="tp-product-details-buy-now-btn w-100">
            Buy Now
          </button>
        </Link>
      </div>
      {/*  product details action sm start */}
      <div className="tp-product-details-action-sm">
        <button
          className="tp-product-details-action-sm-btn"
          disabled={status === "out-of-stock"}
        >
          <CompareTwo />
          Compare
        </button>
        <button
          className="tp-product-details-action-sm-btn"
          disabled={status === "out-of-stock"}
        >
          <WishlistTwo />
          Wishlist
        </button>
        <button className="tp-product-details-action-sm-btn">
          <AskQuestion />
          AskQuestions
        </button>
      </div>
      {/*  product details action sm end */}
    </div>
  );
};

export default DetailsWrapper;
