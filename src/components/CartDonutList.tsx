import { DonutDetail } from "../models/DonutResponse";
import CartDonut from "./CartDonut";
import "./CartDonutList.css";

interface Props {
  donuts: DonutDetail[];
}
const CartDonutList = ({ donuts }: Props) => {
  console.log("cart list loaded");

  const sumCalories = () => {
    const calories = donuts.map((x) => x.calories);
    return calories.reduce((prev, cur) => prev + cur);
  };

  return (
    <table className="CartDonutList">
      <tr>
        <th>Name</th>
        <th>Calories</th>
        <th>Price</th>
      </tr>
      <tbody>
        {donuts.map((donut) => (
          <CartDonut donut={donut} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Totals</th>
          <td>Total Calories: {sumCalories()}</td>
          <td>Total Price: ${donuts.length}.00</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartDonutList;
