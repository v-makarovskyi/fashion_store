//scss path file: frontend/public/assets/scss/layout/ecommerce/_quantity.scss
//scss path file: frontend/public/assets/scss/layout/ecommerce/_cart.scss

import React from "react";
import { useDispatch } from "react-redux";
import { Plus, Minus, Close } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import {
  addToCart,
  quantityDecrement,
  remove_product,
} from "@/redux/features/cartSlice";

const CartItem = ({ product }) => {
  const { _id, img, title, price, slug, orderQuantity = 0 } = product || {};
  const dispatch = useDispatch();

  const handleDecrementQty = (p) => {
    dispatch(quantityDecrement(p));
  };

  const handleAddCartProduct = (p) => {
    dispatch(addToCart(p));
  };

  const handleRemoveProduct = (p) => {
    dispatch(remove_product(p));
  };

  return (
    <tr>
      <td className="tp-cart-img">
        <Link href={`/product-deatils/${slug}`}>
          <Image src={img} alt="product-image" width={70} height={100} />{" "}
        </Link>
      </td>
      <td className="tp-cart-title">
        <Link href={`/product-details/${slug}`}>{title}</Link>
      </td>
      <td className="tp-cart-price">
        <span>${(price * orderQuantity).toFixed(2)}</span>
      </td>
      <td className="tp-cart-quantity mt-10 mb-10">
        <div className="tp-product-quantity">
          <span
            className="tp-cart-minus"
            data-name-cart="cart minus"
            onClick={() => handleDecrementQty(product)}
          >
            <Minus />
          </span>
          <input
            className="tp-cart-input"
            readOnly
            type="text"
            value={orderQuantity}
            data-name-cart="order qty"
          />
          <span
            className="tp-cart-plus"
            data-name-cart="cart plus"
            onClick={() => handleAddCartProduct(product)}
          >
            <Plus />
          </span>
        </div>
      </td>
      <td className="tp-cart-action">
        <button
          className="tp-cart-action-btn"
          onClick={() => handleRemoveProduct(product)}
        >
          <Close /> Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
