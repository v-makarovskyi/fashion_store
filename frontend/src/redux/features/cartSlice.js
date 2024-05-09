import { notifySuccess, notifyError } from "@/utils/toast";
import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

const initialState = {
  cart_items: [],
  orderQuantity: 1,
  cartMiniOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExist = state.cart_items.some((el) => el.slug === payload.slug);
      if (!isExist) {
        const newItem = {
          ...payload,
          orderQuantity: state.orderQuantity,
        };
        state.cart_items.push(newItem);
        notifySuccess(`${state.orderQuantity} ${payload.title} added to cart!`);
      } else {
        state.cart_items.map((item) => {
          if (item.slug === payload.slug) {
            if (item.quantity >= item.orderQuantity + state.orderQuantity) {
              item.orderQuantity =
                state.orderQuantity !== 1
                  ? state.orderQuantity + item.orderQuantity
                  : item.orderQuantity + 1;
              notifySuccess(
                `${state.orderQuantity} ${item.title} added to cart!`
              );
            } else {
              notifyError("No more quantity available for this product!");
              state.orderQuantity = 1;
            }
          }
          return { ...item };
        });
      }
      setLocalStorage("cart_items", state.cart_items);
    },
    openCartMini: (state, { payload }) => {
      state.cartMiniOpen = true;
    },
    closeCartMini: (state, { payload }) => {
      state.cartMiniOpen = false;
    },
  },
});

export const { addToCart, openCartMini, closeCartMini } = cartSlice.actions;
export default cartSlice.reducer;
