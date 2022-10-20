import { createContext } from "react";
import { Donut, DonutDetail } from "../models/DonutResponse";

interface CartContextModel {
  cartDonuts: DonutDetail[];
  addDonutToCart: (donut: DonutDetail) => void;
  removeDonutFromCart: (id: string) => void;
  inCart: (id: string) => boolean;
}

const defaults: CartContextModel = {
  cartDonuts: [],
  addDonutToCart: () => {},
  removeDonutFromCart: () => {},
  inCart: () => false,
};

const CartContext = createContext(defaults);
export default CartContext;
