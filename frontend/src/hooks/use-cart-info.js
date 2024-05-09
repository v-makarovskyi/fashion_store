import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCartInfo = () => {
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const { cart_items } = useSelector((state) => state.cart);

  useEffect(() => {
    const cart = cart_items.reduce(
      (cartTotal, cartItem) => {
        const { orderQuantity, price } = cartItem;
        const itemTotalSumm = orderQuantity * price;
        cartTotal.total += itemTotalSumm;
        cartTotal.qty += orderQuantity;
      },
      {
        qty: 0,
        total: 0,
      }
    );
    setTotal(cart.total);
    setQty(cart.qty);
  }, [cart_items]);
  return {
    qty,
    total,
    setTotal,
  };
};

export default useCartInfo;
