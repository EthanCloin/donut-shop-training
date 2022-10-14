import { Donut } from "../models/DonutResponse";
import "./CartDonut.css";

interface Props {
  donut: Donut;
}
const CartDonut = ({ donut }: Props) => {
  return <div className="CartDonut">CartDonut works</div>;
};

export default CartDonut;
