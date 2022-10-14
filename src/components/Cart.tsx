import { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Cart.css";
import DonutList from "./DonutList";

const Cart = () => {
  const { cartDonuts } = useContext(CartContext);
  return (
    <div className="Cart">
      <DonutList donutsList={cartDonuts} />
    </div>
  );
};

export default Cart;
