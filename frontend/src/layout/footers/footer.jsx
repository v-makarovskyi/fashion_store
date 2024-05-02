import React from "react";
import Link from "next/link";
import Image from "next/image";
//internal
import { Email, Location } from "@/svg";
import logo from "@assets/img/logo/logo.svg";
import pay from "@assets/img/footer/footer-pay.png";
import social_data from "@/data/social-data";

const Footer = () => {
  return (
    <footer>
      <div
        className="tp-footer-area tp-footer-style"
        data-bg-color="footer-bg-white"
      >
        <div className="tp-footer-top pt-95 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-1 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <Image src={logo} alt="logo-image" />
                      </Link>
                    </div>
                    <p className="tp-footer-desc">
                      We are a dynamic team of full stack developers and
                      designers crafting high-quality web applications
                    </p>
                    <div className="tp-footer-social">
                      {social_data.map((s) => (
                        <a href={s.link} key={s.id} target="_blank">
                          <i className={s.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-2 mb-50">
                  <h4 className="tp-footer-widget-title">My Account</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <a href="#">Track Orders</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Order History</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-3 mb-50">
                  <h4 className="tp-footer-widget-title">Information</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <a href="#">Our Story</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Talk To Us</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Got Questions? Call us</span>
                      <h4>
                        <a href="tel:+38-067-333-33=55">+38 (067) 333-33-55</a>
                      </h4>
                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Email />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <a href="mailto:test@fashion-store.com">
                              info@fashion-store.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Location />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p>
                            <a href="CGQF+F7" target="_blank">sq. Sports 1-A, Kyiv, Ukraine </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-bottom">
            <div className="container">
                <div className="tp-footer-bottom-wrapper">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="tp-footer-copyright">
                                <p>
                                    ©{new Date().getFullYear()} All right reserved | Next.js   
                                    Template by
                                    <Link href='/'> ❤</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tp-footer-payment text-md-end">
                                <p>
                                    <Image src={pay} alt="pay-img" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
