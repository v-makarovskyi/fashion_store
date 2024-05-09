import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCartMini } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import logo from "@assets/img/logo/logo.svg";
import Menus from "./header-com/menus";
import CartMiniSidebar from "@/components/common/cart-mini-sidebar";
import useSticky from "@/hooks/use-sticky";
import useCartInfo from "@/hooks/use-cart-info";
import {
  Facebook,
  PhoneTwo,
  Search,
  Compare,
  Wishlist,
  CartTwo,
  Menu,
} from "@/svg";

const Header = ({ style_2 = false }) => {
  const dispatch = useDispatch();
  const { sticky } = useSticky();
  const { qty } = useCartInfo()

  return (
    <>
      <header>
        <div
          className={`tp-header tp-header-height tp-header-style-${
            style_2 ? "primary" : "darkRed"
          }`}
        >
          <div className="tp-header-top p-relative z-index-11 tp-header-top-border d-none d-md-block">
            <div className="container">
              <div className="row align-items-center justify-content-start">
                <div className="col-md-6">
                  <div className="tp-header-info d-flex align-items-center justify-content-start">
                    <div className="tp-header-info-item">
                      <a href="#">
                        <span>
                          <Facebook /> 5400 Followers
                        </span>
                      </a>
                    </div>
                    <div className="tp-header-info-item">
                      <a href="#">
                        <span>
                          <PhoneTwo /> +38 (067) 333-33-55
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="header-sticky"
            className={`tp-header-bottom tp-header-sticky ${
              sticky ? "header-sticky" : ""
            }`}
          >
            <div className="container">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-6 col-xl-2 col-lg-5 col-md-5 col-sm-4">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo} alt="logo-img" priority />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-5 d-none d-xl-block">
                    <div className="main-menu menu-style">
                      <nav className="tp-main-menu-content">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-6 col-xl-5 col-lg-7 col-md-7 col-sm-8">
                    <div className="tp-header-bottom-right d-flex align-items-center justify-content-end pl-30">
                      <div className="tp-header-search d-none d-sm-block">
                        <form>
                          <input
                            type="text"
                            placeholder="Search for Products..."
                          />
                          <button
                            className="tp-header-search-2-btn"
                            type="submit"
                          >
                            <Search />
                          </button>
                        </form>
                      </div>
                      <div className="tp-header-action d-flex align-items-center ml-30">
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link
                            href="/compare"
                            className="tp-header-action-btn"
                          >
                            <Compare />
                          </Link>
                        </div>
                        <div className="tp-header-action-item d-none d-lg-block">
                          <Link
                            href="/wishlist"
                            className="tp-header-action-btn"
                          >
                            <Wishlist />
                            <span className="tp-header-action-badge">6</span>
                          </Link>
                        </div>
                        <div className="tp-header-action-item">
                          <button 
                            className="tp-header-action-btn cartmini-open-btn"
                            onClick={() => dispatch(openCartMini())}
                          >
                            <CartTwo />
                            <span className="tp-header-action-badge">{qty}</span>
                          </button>
                        </div>
                        <div className="tp-header-action-item tp-header-hamburger d-xl-none">
                          <button
                            type="button"
                            className="tp-offcanvas-open-btn"
                          >
                            <Menu />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <CartMiniSidebar />
    </>
  );
};

export default Header;
