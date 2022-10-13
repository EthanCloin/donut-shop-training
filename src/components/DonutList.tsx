import { useEffect, useState } from "react";
import { Donut } from "../models/DonutResponse";
import { getDonutList } from "../services/DonutService";
import DonutItem from "./DonutItem";
import "./DonutList.css";

const DonutList = () => {
  const [donutsList, setDonutsList] = useState<Donut[]>();

  useEffect(() => {
    getDonutList().then((res) => setDonutsList(res.results));
  });
  return (
    <div className="DonutList">
      {donutsList?.map((donut) => (
        <DonutItem key={donut.id} title={donut.name} />
      ))}
    </div>
  );
};

export default DonutList;
