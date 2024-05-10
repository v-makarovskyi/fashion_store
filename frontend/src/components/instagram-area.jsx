//file scss path frontend/public/assets/scss/layout/pages/_instagram.scss

import React from "react";
import Image from "next/image";
import insta_1 from "@assets/img/instagram/my-insta/insta-area-1.jpg";
import insta_2 from "@assets/img/instagram/my-insta/insta-area-2.jpg";
import insta_3 from "@assets/img/instagram/my-insta/insta-area-3.jpg";
import insta_4 from "@assets/img/instagram/my-insta/insta-area-4.jpg";
import insta_icon from "@assets/img/instagram/my-insta/insta-icon.png";

const INSTAGRAM_DATA = [
  { id: 1, path: "https://www.instagram.com/", img: insta_1 },
  { id: 2, path: "https://www.instagram.com/", img: insta_2 },
  { id: 3, path: "https://www.instagram.com/", banner: true, img: insta_icon },
  { id: 4, path: "https://www.instagram.com/", img: insta_3 },
  { id: 5, path: "https://www.instagram.com/", img: insta_4 },
];

const InstagramArea = () => {
  return (
    <section className="tp-instagram-area">
      <div className="container-fluid pl-20 pr-20">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 gx-2 gy-2 gy-lg-0">
          {INSTAGRAM_DATA.map((item) =>
            item.banner ? (
              <div key={item.id} className="col">
                <div className="tp-instagram-banner text-center">
                  <div className="tp-instagram-banner-icon mb-30">
                    <a href={item.path} target="_blank">
                      <Image src={item.img} alt="insta-banner" />
                    </a>
                  </div>
                  <div className="tp-instagram-banner-content">
                    <span>Follow Us on</span>
                    <a href={item.path} target="_blank">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.id} className="col">
                <div
                  className="tp-instagram-item"
                  style={{ height: "100%", width: "100%" }}
                >
                  <Image src={item.img} alt="user-icon-instagram" />
                  <div className="tp-instagram-icon">
                    <a href={item.path} className="popup-image" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramArea;
