import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import RenderCartProgress from "../common/render-cart-progress";
import CartCheckout from "./cart-checkout";
import CartItem from "./cart-item";

const CartArea = () => {
  const { cart_items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <section className="tp-cart-area pb-120">
      <div className="container">
        {cart_items.length === 0 && (
          <div className="text-center pt-50">
            <h3>No cart items found</h3>
            <Link href="/shop" className="tp-cart-checkout-btn mt-20">
              Continue Shipping
            </Link>
          </div>
        )}
        {cart_items.length > 0 && (
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="tp-cart-list mr-30 mb-25">
                <div className="cartmini__shipping">
                  <RenderCartProgress />
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan="2" className="tp-cart-header-product">
                        Product
                      </th>
                      <th className="tp-cart-header-price">Price</th>
                      <th className="tp-cart-header-quantity">Quantity</th>
                      <th></th>
                    </tr>
                    <tbody>
                      {cart_items.map((item, index) => (
                        <CartItem key={index} product={item} />
                      ))}
                    </tbody>
                  </thead>
                </table>
              </div>
              <div className="tp-cart-bottom">
                <div className="row align-items-end justify-content-end">
                  <div className="col-md-4 col-xl-6">
                    <div className="tp-cart-update text-md-end mr-30">
                      <button type="button" className="tp-cart-update-btn">
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6">
              <CartCheckout />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartArea;
