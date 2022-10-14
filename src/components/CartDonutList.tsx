import { Donut } from "../models/DonutResponse";
import CartDonut from "./CartDonut";
import "./CartDonutList.css";

interface Props {
  donuts: Donut[];
}
const CartDonutList = ({ donuts }: Props) => {
  return (
    <ul className="CartDonutList">
      {donuts.map((donut) => (
        <CartDonut donut={donut} />
      ))}
    </ul>
  );
};

export default CartDonutList;
