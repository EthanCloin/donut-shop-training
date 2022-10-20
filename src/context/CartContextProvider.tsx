import { ReactNode, useState } from "react";
import { Donut, DonutDetail } from "../models/DonutResponse";
import CartContext from "./CartContext";

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [cartDonuts, setCartDonuts] = useState<DonutDetail[]>([]);
  const addDonutToCart = (donut: DonutDetail): void => {
    setCartDonuts((prev) => [...prev, donut]);
  };
  const removeDonutFromCart = (id: string): void => {
    setCartDonuts((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const inCart = (id: string): boolean =>
    cartDonuts.some((gif) => gif.id === id);

  return (
    <CartContext.Provider
      value={{ cartDonuts, addDonutToCart, removeDonutFromCart, inCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
