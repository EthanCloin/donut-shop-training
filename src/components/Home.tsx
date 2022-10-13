import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Donut } from "../models/DonutResponse";
import { getDonutList } from "../services/DonutService";
import DonutList from "./DonutList";
import "./Home.css";

const Home = () => {
  const [donutsList, setDonutsList] = useState<Donut[]>([]);
  const [searchParams] = useSearchParams();
  const donutId = searchParams.get("donutId");

  useEffect(() => {
    getDonutList().then((res) => setDonutsList(res.results));
  }, []);

  return (
    <div className="Home">
      <DonutList donutsList={donutsList} />
    </div>
  );
};

export default Home;
