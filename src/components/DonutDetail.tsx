import "./DonutDetail.css";
import { DonutDetail } from "../models/DonutResponse";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DonutDetail = () => {
  const donutId = useParams().donutId;
  const [donut, setDonut] = useState<DonutDetail>();

  useEffect(() => {
    // create and use service get by id here
  }, [donutId]);
  return (
    <div className="DonutDetail">
      <h1>All About {donut.name}!</h1>
      <p>only {donut.calories}</p>
      {donut.photo === "" && (
        <DonutPic url={donut.photo} attribution={donut.photo_attribution} />
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
      <img src={url} />
      <p>{attribution}</p>
    </div>
  );
};

export default DonutDetail;
