import { useEffect, useState } from "react";
import { Donut } from "../models/DonutResponse";
import { getDonutList } from "../services/DonutService";
import DonutItem from "./DonutItem";
import "./DonutList.css";

interface Props {
  donutsList: Donut[];
}
const DonutList = ({ donutsList }: Props) => {
  return (
    <div className="DonutList">
      {donutsList?.map((donut) => (
        <DonutItem key={donut.id} title={donut.name} id={donut.id} />
      ))}
    </div>
  );
};

export default DonutList;
