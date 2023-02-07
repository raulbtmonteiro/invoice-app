import * as S from "./styles";
import iconCheck from "../../../../assets/icon-check.svg";
import { useState } from "react";

interface FilterOptions {
  status: string;
}

export const FilterOptions = ({ status }: FilterOptions) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <S.OptionGroup onClick={() => setIsSelected(!isSelected)}>
        <S.SelectionBox isSelected={isSelected}>
          <img src={iconCheck} />
        </S.SelectionBox>
        {status}
      </S.OptionGroup>
    </>
  );
};
