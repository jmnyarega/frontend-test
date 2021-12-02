import { FC } from "react";
import { FilterStyle } from "./Styles/Filter.styles";
import { ICategories, ISort } from "../../types/index.types";

interface IProps {
  categories: ICategories;
  sortBy: ISort;
}

const Filter: FC<IProps> = ({ categories, sortBy }) => {
  return (
    <FilterStyle>
      <select name="sortBy">
        <option value="">Sort By</option>
        {sortBy?.map((sort) => (
          <option key={sort} value={sort}>
            {sort}
          </option>
        ))}
      </select>
      <select name="categories">
        <option value="">Categories</option>
        {categories?.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </FilterStyle>
  );
};

export default Filter;
