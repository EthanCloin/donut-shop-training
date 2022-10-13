import { Link } from "react-router-dom";
import "./DonutItem.css";

interface Props {
  title: string;
  id: number;
}
const DonutItem = ({ title, id }: Props) => {
  return (
    <div className="Donut">
      <Link to="/donut/">
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default DonutItem;
