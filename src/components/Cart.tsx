import { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Cart.css";
import CartDonutList from "./CartDonutList";
import DonutList from "./DonutList";

const Cart = () => {
  const { cartDonuts } = useContext(CartContext);
  console.log("cart loaded");
  return (
    <div className="Cart">
      <CartDonutList donuts={cartDonuts} />
    </div>
  );
};

export default Cart;
