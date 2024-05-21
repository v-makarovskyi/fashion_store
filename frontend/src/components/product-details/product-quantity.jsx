//scss file path frontend/public/assets/scss/layout/ecommerce/_productDetails.scss

import React from "react";
import { useDispatch, useSelector } from "react-redux";
//internal
import { Minus, Plus } from "@/svg";
import { increment, decrement } from "@/redux/features/cartSlice";

const ProductQuantity = () => {
  const { orderQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  return (
    <div className="tp-product-details-quantity">
        <div className="tp-product-quantity text-center mr-15 mb-15">
            <span className="tp-cart-minus" onClick={handleDecrease}>
                <Minus />
            </span>
            <span className="tp-cart-input">{orderQuantity}</span>
            <span className="tp-cart-plus" onClick={handleIncrease}>
                <Plus />
            </span>
        </div>
    </div>
  )
};

export default ProductQuantity;
