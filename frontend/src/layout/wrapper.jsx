import React from "react";
import { ToastContainer } from "react-toastify";
import BackToTop from "@/components/common/back-to-top";

const Wrapper = ({ children }) => {
  return (
    <div id="wrapper">
      {children}
      <BackToTop />
      <ToastContainer />
    </div>
  );
};

export default Wrapper;
