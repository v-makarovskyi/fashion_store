import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import empty_cart_img from "@assets/img/product/cartmini/empty-cart.png";
import test_img_product from "@assets/img/product/2/prodcut-6.jpg";
import RenderCartProgress from "./render-cart-progress";
import { closeCartMini } from "@/redux/features/cartSlice";

const CartMiniSidebar = () => {
  const { cartMiniOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCloseCartMini = () => {
    dispatch(closeCartMini());
  };
  const cart_products = [
    /*  {
      _id: 12345645,
      title: "Patifon",
      img: test_img_product,
      discount: 10,
      price: 897.56,
      orderQuantity: 6,
    },
    {
      _id: 12345640,
      title: "Patifon",
      img: test_img_product,
      discount: 10,
      price: 897.56,
      orderQuantity: 6,
    }, */
  ];

  return (
    <>
      <div
        className={`cartmini__area tp-all-font-roboto ${
          cartMiniOpen ? "cartmini-opened" : ""
        }`}
      >
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper">
            <div className="cartmini__top p-relative">
              <div className="cartmini__top-title">
                <h4>Shopping cart</h4>
              </div>
              <div className="cartmini__close">
                <button
                  type="button"
                  className="cartmini__close-btn cartmini-close-btn"
                  onClick={() => dispatch(closeCartMini())}
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            <div className="cartmini__shipping">
              <RenderCartProgress />
            </div>
            {cart_products?.length > 0 && (
              <div className="cartmini__widget">
                {cart_products?.map((item) => (
                  <div key={item._id} className="cartmini__widget-item">
                    <div className="cartmini__thumb">
                      <Link href={`/product-details/${item._id}`}>
                        <Image
                          src={item.img}
                          width={70}
                          height={60}
                          alt="product img"
                        />
                      </Link>
                    </div>
                    <div className="cartmini__content">
                      <h5 className="cartmini__title">
                        <Link href={`/product-detail/${item._id}`}>
                          {item.title}
                        </Link>
                      </h5>
                      <div className="cartmini__price-wrapper">
                        {item.discount > 0 ? (
                          <span className="cartmini__price">
                            $
                            {(
                              Number(item.price) -
                              (Number(item.price) * Number(item.discount)) / 100
                            ).toFixed(2)}
                          </span>
                        ) : (
                          <span className="cartmini__price">
                            ${item.price.toFixed(2)}
                          </span>
                        )}
                        <span className="cartmini__quantity">
                          {" "}
                          x {item.orderQuantity}
                        </span>
                      </div>
                    </div>
                    <a href="" className="cartmini__del cursor-pointer">
                      <i className="fa-regular fa-xmark"></i>
                    </a>
                  </div>
                ))}
              </div>
            )}
            {cart_products.length === 0 && (
              <div className="cartmini__empty text-center">
                <Image src={empty_cart_img} alt="emty-cart" />
                <p>Your cart is empty</p>
                <Link href="/shop" className="tp-btn">
                  Go to Shop
                </Link>
              </div>
            )}
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>subtotal:</h4>
              <span>1234</span>
            </div>
            <div className="cartmini__checkout-btn">
              <Link
                href="/cart"
                className="tp-btn mb-10 w-100"
                onClick={handleCloseCartMini}
              >
                {" "}
                view cart
              </Link>
              <Link
                href="/checkout"
                className="tp-btn tp-btn-border w-100"
                onClick={handleCloseCartMini}
              >
                {" "}
                checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${cartMiniOpen ? "opened" : ""} `}
        onClick={handleCloseCartMini}
      ></div>
    </>
  );
};

export default CartMiniSidebar;
