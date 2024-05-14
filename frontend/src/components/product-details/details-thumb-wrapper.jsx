import React, { useState } from "react";
import Image from "next/image";

const DetailsThumbWrapper = ({
  onHandleActiveImage,
  imageURLs,
  imgWidth = 416,
  imgHeight = 480,
  status,
  activeImg,
  videoId = false,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
      <nav>
        <div className="nav nav-tabs flex-sm-column">
          {imageURLs.map((item, index) => (
            <button
              key={index}
              className={`nav-link ${item.img === activeImg ? "active" : ""}`}
              onClick={() => onHandleActiveImage(item)}
            >
              <Image src={item.img} width={78} height={100} alt="item-img" />
            </button>
          ))}
        </div>
      </nav>
      <div className="tab-content m-img">
        <div className="tab-pane fade show active">
          <div className="tp-product-details-nav-main-thumb p-relative">
            <Image
              src={activeImg}
              alt="main-image"
              width={imgWidth}
              height={imgHeight}
              style={{ objectFit: "contain" }}
            />
            <div className="tp-product-badge">
              {status === "out-of-stock" && (
                <span className="product-hot">Out-of-Stock</span>
              )}
            </div>
            {videoId && (
              <div
                onClick={() => setIsVideoOpen(true)}
                className="tp-product-details-thumb-video"
              >
                <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsThumbWrapper;
