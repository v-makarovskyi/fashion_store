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
        cart_items.map((item) => {
          if (item.slug === payload.slug) {
            if (item.quantity >= item.orderQuantity + state.orderQuantity) {
              item.orderQuantity =
                state.orderQuantity !== 1
                  ? item.orderQuantity + state.orderQuantity
                  : item.orderQuantity + 1;
              notifySuccess(
                `${state.orderQuantity} ${item.title} added to cart`
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
    increment: (state, { payload }) => {
      state.orderQuantity = state.orderQuantity + 1;
    },
    decrement: (state, { payload }) => {
      state.orderQuantity =
        state.orderQuantity > 1
          ? state.orderQuantity - 1
          : (state.orderQuantity = 1);
    },
    quantityDecrement: (state, { payload }) => {
      state.cart_items.map((item) => {
        if (item.slug === payload.slug) {
          if (item.orderQuantity > 1) {
            item.orderQuantity = item.orderQuantity - 1;
          }
        }
      });
      setLocalStorage("cart_items", state.cart_items);
    },
    openCartMini: (state, { payload }) => {
      state.cartMiniOpen = true;
    },
    closeCartMini: (state, { payload }) => {
      state.cartMiniOpen = false;
    },
    getCartProducts: (state, { payload }) => {
      state.cart_items = getLocalStorage("cart_items");
    },
    initialOrderQuantity: (state) => {
      state.orderQuantity = 1;
    },
    clearCart: (state) => {
      const isClearCart = window.confirm('Are you sure you want to remove all items ?')
      if(isClearCart) {
        state.cart_items = []
      }
      setLocalStorage('cart_items', state.cart_items)
    }
  },
});

export const {
  addToCart,
  increment,
  decrement,
  openCartMini,
  closeCartMini,
  getCartProducts,
  initialOrderQuantity,
  quantityDecrement,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
