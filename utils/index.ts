import { ILoader } from "../types/index.types";

export const numberFormart = (val: number) =>
  new Intl.NumberFormat("en", {}).format(val);

export const myLoader = ({ src, width, quality }: ILoader) =>
  `${src}?w=${width}&q=${quality}`;
