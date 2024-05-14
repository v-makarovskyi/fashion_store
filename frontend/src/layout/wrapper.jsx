import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "@/redux/features/cartSlice";
import { ToastContainer } from "react-toastify";
import BackToTop from "@/components/common/back-to-top";
import ProductModal from "@/components/common/product-modal";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch()
  const { productItem, isModalOpen } = useSelector((state) => state.productModal)

  useEffect(() => {
    dispatch(getCartProducts())
  }, [dispatch])

  return (
    <div id="wrapper">
      {children}
      <BackToTop />
      <ToastContainer />
      { productItem && <ProductModal product={productItem} isModalOpen={isModalOpen}/> }
    </div>
  );
};

export default Wrapper;
