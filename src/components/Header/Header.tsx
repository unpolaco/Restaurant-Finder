import React from "react";
import { useSearch } from "../../hooks/useSearch";
import { Title } from "./Header.styles";

export const Header = () => {
  const { cityParams } = useSearch();
  return (
    <Title>
      Where do you want to go tonight in {cityParams ? cityParams : "Warsaw"} ?
    </Title>
  );
};
