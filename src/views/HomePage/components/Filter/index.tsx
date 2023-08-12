import arrowDown from "../../../../assets/images/icon-arrow-down.svg";
import { FilterOptions } from "./FilterOptions";
import { useState } from "react";
import * as S from "./styles";

import { useTranslation } from "react-i18next";

interface IFilter {
  activeFilter: string[];
  setActiveFilter: (status: string[]) => void;
}

export const Filter = ({ activeFilter, setActiveFilter }: IFilter) => {
  const { t } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.Wrapper
        onClick={() => handleClick()}
        tabIndex={0}
        aria-label="Abrir opções de filtro"
      >
        {t("home.filter.title")}
        <S.FilterArrow src={arrowDown} isOpen={isOpen} aria-hidden />
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
