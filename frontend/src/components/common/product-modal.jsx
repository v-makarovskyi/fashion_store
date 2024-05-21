//scss file path frontend/public/assets/scss/layout/ecommerce/_productDetails.scss
//scss file path frontend/public/assets/scss/layout/ecommerce/_modal.scss

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactModal from "react-modal";
import { initialOrderQuantity } from "@/redux/features/cartSlice";
import { handleModalClose } from "@/redux/features/productModalSlice";
import DetailsThumbWrapper from "@/components/product-details/details-thumb-wrapper";
import DetailsWrapper from "@/components/product-details/details-wrapper";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "calc(100% - 280px)",
  },
};

const ProductModal = ({ product, isModalOpen }) => {
  const { img, status, imageURLs } = product || {};
  const [activeImage, setActiveImage] = useState(img);
  console.log(activeImage)

  const dispatch = useDispatch();

  const handleActiveImage = (item) => {
    setActiveImage(item.img);
  };

  return (
    <div>
      <ReactModal
        style={customStyles}
        contentLabel="Product Modal"
        isOpen={isModalOpen}
        onRequestClose={() => dispatch(handleModalClose())}
      >
        <div className="tp-product-modal">
          <div className="tp-product-modal-content d-lg-flex">
            <button
              className="tp-product-modal-close-btn"
              onClick={() => dispatch(handleModalClose())}
              type="button"
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
            <DetailsThumbWrapper
              onHandleActiveImage={handleActiveImage}
              activeImg={activeImage}
              imageURLs={imageURLs}
              imgWidth={416}
              imgHeight={480}
              status={status}
            />
            <DetailsWrapper 
              product={product}
              onHandleActiveImage={handleActiveImage}
              activeImg={activeImage}
            />
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ProductModal;
