import React from "react";
import { useDispatch } from "react-redux";
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

export default function Header() {
  const dispatch = useDispatch();
  const { sticky } = useSticky();
  const { qty } = useCartInfo();

  return (
    <header className="header">
      <div className="header__inner header__height">
        <div className="header__top header__top-border p-relative z-index-11 d-none d-md-block">
          <div className="container">
            <div className="row align-items-center justify-content-start">
              <div className="col-md-6">
                <div className="header__top-info d-flex align-items-center justify-content-start">
                  <div className="header__top-info-item">
                    <a href="#">
                      <span className="facebook">
                        <Facebook /> 5400K followers
                      </span>
                    </a>
                  </div>
                  <div className="header__top-info-item">
                    <a href="#">
                      <span className="phone">
                        <PhoneTwo /> +38 (044) 333-33-44
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
          className={`header__bottom ${
            sticky ? "header__bottom--header-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="header__bottom-megamenu-wrapper p-relative">
              <div className="row align-items-center">
                <div className="col-6 col-sm-4 col-md-5 col-lg-5 col-xl-2">
                  <div className="logo">
                    <Link href="/">
                      <Image src={logo} alt="logo-site" priority />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 d-none d-xl-block">
                  <div className="main-menu menu-style">
                    <nav className="main-menu__content">
                      <Menus />
                    </nav>
                  </div>
                </div>
                <div className="col-6 col-sm-8 col-md-7 col-lg-7 col-xl-5">
                  <div className="header__bottom-right d-flex align-items-center justify-content-end pl-30">
                    <div className="header-search d-none d-sm-block">
                      <form>
                        <input
                          type="text"
                          placeholder="Search ror Products..."
                        />
                        <button type="submit" className="header-search__btn">
                          <Search />
                        </button>
                      </form>
                    </div>
                    <div className="header-action d-flex align-items-center ml-30">
                      <div className="header-action__item d-none d-lg-block">
                        <Link href="/compare" className="header-action__btn">
                          <Compare />
                          <span className="header-action__badge">6</span>
                        </Link>
                      </div>
                      <div className="header-action__item d-none d-lg-block">
                        <Link href="/wishlist" className="header-action__btn">
                          <Wishlist />
                          <span className="header-action__badge">4</span>
                        </Link>
                      </div>
                      <div className="header-action__item">
                        <button
                          onClick={() => dispatch(openCartMini())}
                          className="header-action__btn cartmini-open-btn"
                        >
                          <CartTwo />
                          <span className="header-action__badge">{qty}</span>
                        </button>
                      </div>
                      <div className="header-action__item header-action-hamburger d-xl-none">
                        <button type="button" className="tp-offcanvas-open-btn">
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
      <CartMiniSidebar />
    </header>
  );
}
