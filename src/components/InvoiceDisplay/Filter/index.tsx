import * as S from "./styles";
import { FilterOptions } from "./FilterOptions";
import arrowDown from "../../../assets/icon-arrow-down.svg";
import { useState } from "react";

export const Filter = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.Wrapper onClick={() => handleClick()}>
        Filter
        <S.FilterArrow src={arrowDown} isOpen={isOpen} />
      </S.Wrapper>
      {showOptions && (
        <S.OptionsWrapper>
          <S.Options>
            {filtersArray.map((item) => {
              return <FilterOptions status={item} />;
            })}
          </S.Options>
        </S.OptionsWrapper>
      )}
    </>
  );
};

const filtersArray = ["Draft", "Pending", "Paid"];
