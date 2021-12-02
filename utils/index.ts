import { ILoader } from "../types/index.types";

export const numberFormart = (val: number) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "Ksh",
  }).format(val);

export const myLoader = ({ src, width, quality }: ILoader) =>
  `${src}?w=${width}&q=${quality}`;
