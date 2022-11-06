import React, { useState } from "react";
import { SelectCategories } from "../SelectCategories/SelectCategories";
import { Input } from "../Input";
import { AnimatedLabel } from "../Label";
import { SubmitButton } from "../Button";
import { useSearch } from "../../hooks/useSearch";
import { FormWrapper } from "./Form.styles";

export const Form: React.FC = () => {
  const {addSearchParams } = useSearch()
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    addSearchParams(city, [category])
  };
  
  return (
    <FormWrapper>
      <Input
        required
        type="text"
        id="searchInput"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        autoComplete="off"
      />
      <AnimatedLabel htmlFor="searchInput">City name</AnimatedLabel>
      <SelectCategories
        onChangeCategory={(e) => {
          setCategory(e.target.value)}}
        value={category}
      />
      <SubmitButton type="submit" onClick={(e) => handleSubmit(e)}>
        Find it!
      </SubmitButton>
    </FormWrapper>
  );
};


