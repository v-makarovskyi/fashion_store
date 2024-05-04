//scss file path: "frontend/public/assets/scss/layout/pages/_slider.scss" 

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import slider_img_1 from "@assets/img/slider/2/slider-1.png";
import slider_img_2 from "@assets/img/slider/2/slider-2.png";
import slider_img_3 from "@assets/img/slider/2/slider-3.png";
import slider_shape from "@assets/img/slider/2/shape/shape-1.png";
import thumb_shape_1 from "@assets/img/slider/2/shape/shape-2.png";
import thumb_shape_2 from "@assets/img/slider/2/shape/shape-3.png";

//slider data
const slider_data = [
  {
    id: 1,
    subtitle: "New Arrivals 2024",
    title: "The Clothing Collection",
    img: slider_img_1,
  },
  {
    id: 2,
    subtitle: "Best Selling 2024",
    title: "The Summer Collection",
    img: slider_img_2,
  },
  {
    id: 3,
    subtitle: "Winter Has Arrived",
    title: "Amazing New designs",
    img: slider_img_3,
  },
];

//slider settings
const slider_settings = {
  slidesPerView: 3,
  spaseBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".tp-slider-button-next",
    prevEl: ".tp-slider-button-prev",
  },
  pagination: {
    el: ".tp-slider-dot",
    clickable: true,
  },
};

const FashionBanner = () => {
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
        <Swiper
          {...slider_settings}
          modules={[Navigation, EffectFade, Pagination]}
          className="tp-slider-active swiper-container"
        >
            {slider_data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="tp-swiper-slider tp-slider-height p-relative grey-bg-5 d-flex align-items-end">
                        <div className="tp-slider-shape">
                            <Image className="tp-slider-shape-1" src={slider_shape} alt="slider-shape" />
                        </div>
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                              <div className="tp-slider-content">
                                <span>{item.subtitle}</span>
                                <h3 className="tp-slider-title">{item.title}</h3>
                                <div className="tp-slider-btn">
                                  <Link href='/shop' className="tp-btn tp-btn-border">Shop Collection</Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                              <div className="tp-slider-thumb-wrapper p-relative">
                                <div className="tp-slider-thumb-shape">
                                  <Image className="tp-slider-thumb-shape-1" src={thumb_shape_1} alt="shape" />
                                  <Image className="tp-slider-thumb-shape-2" src={thumb_shape_2} alt="shape" />
                                </div>
                                <div className="tp-slider-thumb text-end">
                                  <span className="tp-slider-thumb-gradient"></span>
                                  <Image src={item.img} alt={`slider-img-${item.id}`} priority />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="tp-swiper-dot tp-slider-dot"></div>
        </Swiper>
      </section>
    </>
  );
};

export default FashionBanner;
