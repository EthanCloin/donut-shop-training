import { createContext } from "react";
import { Donut } from "../models/DonutResponse";

interface CartContextModel {
  cartDonuts: Donut[];
  addDonutToCart: (donut: Donut) => void;
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
