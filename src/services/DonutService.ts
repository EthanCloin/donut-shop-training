import axios from "axios";
import { DonutDetail, DonutListResponse } from "../models/DonutResponse";

export const getDonutList = (): Promise<DonutListResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((res) => res.data);
};

export const getDonutDetail = (donutId: string): Promise<DonutDetail> => {
  return axios
    .get(`https://grandcircusco.github.io/demo-apis/donuts/${donutId}.json`)
    .then((res) => res.data);
};
