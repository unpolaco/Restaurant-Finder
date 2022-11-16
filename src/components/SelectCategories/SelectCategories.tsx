import React, { FC } from "react";
import { categories } from "./categories.consts";
import { Option, Select } from "./SelectCategories.styles";

interface SelectCategoriesParams {
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string
}
export const SelectCategories: FC<SelectCategoriesParams> = ({
  onChangeCategory, value
}) => {
  return (
    <Select onChange={e => onChangeCategory(e)} value={value}>
      {categories.map((category) => (
        <Option key={category.id} value={category.id}>{category.name}</Option>
      ))}
    </Select>
  );
};


