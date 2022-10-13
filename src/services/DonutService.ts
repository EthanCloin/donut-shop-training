import axios from "axios";
import { DonutListResponse } from "../models/DonutResponse";

export const getDonutList = (): Promise<DonutListResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((res) => res.data);
};
