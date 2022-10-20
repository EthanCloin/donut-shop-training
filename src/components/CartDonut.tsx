import { useContext } from "react";
import CartContext from "../context/CartContext";
import { DonutDetail } from "../models/DonutResponse";
import "./CartDonut.css";

interface Props {
  donut: DonutDetail;
}
const CartDonut = ({ donut }: Props) => {
  const { removeDonutFromCart } = useContext(CartContext);

  console.log("cart donut here");
  return (
    <tr className="CartDonut">
      <td className="donut-name">{donut.name}</td>
      <td className="donut-calories">{donut.calories}</td>
      <td className="donut-price">$1.00</td>
      <button onClick={() => removeDonutFromCart(donut.id)}>Remove</button>
    </tr>
  );
};

export default CartDonut;
