import "./DonutItemDetail.css";
import { DonutDetail } from "../models/DonutResponse";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getDonutDetail } from "../services/DonutService";
import CartContext from "../context/CartContext";

const DonutItemDetail = () => {
  const donutId = useParams().donutId;
  const [donut, setDonut] = useState<DonutDetail | null>(null);
  const { addDonutToCart, inCart } = useContext(CartContext);

  useEffect(() => {
    getDonutDetail(donutId!).then((res) => {
      console.log(res);
      setDonut(res);
    });
  }, [donutId]);

  return (
    <div className="DonutDetail">
      {donut ? (
        <div>
          <h1>Have a {donut.name}!</h1>
          <p>(only {donut.calories} calories)</p>
          <button onClick={() => addDonutToCart(donut)}>Add to Cart</button>
          {donut.photo !== "" && (
            <DonutPic url={donut.photo} attribution={donut.photo_attribution} />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

interface PicProps {
  url: string;
  attribution: string;
}

const DonutPic = ({ url, attribution }: PicProps) => {
  return (
    <div className="DonutPic">
      <img width="300" height="300" src={url} />
      <p>
        <strong>Photo by: </strong>
        <a href={attribution}>Wikimedia</a>
      </p>
    </div>
  );
};

export default DonutItemDetail;
