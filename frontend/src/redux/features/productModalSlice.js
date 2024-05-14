import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItem: null,
  isModalOpen: false,
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    handleProductModal: (state, { payload }) => {
      state.productItem = payload;
      state.isModalOpen = true;
    },
    handleModalClose: (state, { payload }) => {
      state.isModalOpen = false;
      state.productItem = null;
    },
  },
});

export const { handleModalClose, handleProductModal } =
  productModalSlice.actions;
export default productModalSlice.reducer;
