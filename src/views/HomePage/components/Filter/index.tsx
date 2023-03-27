import arrowDown from "../../../../assets/images/icon-arrow-down.svg";
import { FilterOptions } from "./FilterOptions";
import { useState } from "react";
import * as S from "./styles";

interface IFilter {
  activeFilter: string[];
  setActiveFilter: (status: string[]) => void;
}

export const Filter = ({ activeFilter, setActiveFilter }: IFilter) => {
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
          <S.Options id="filters-modal">
            {filtersArray.map((item) => {
              return (
                <FilterOptions
                  key={Math.random()}
                  status={item}
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              );
            })}
          </S.Options>
        </S.OptionsWrapper>
      )}
    </>
  );
};

const filtersArray = ["draft", "pending", "paid"];
