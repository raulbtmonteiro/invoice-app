import * as S from "./styles";
import arrowDown from "../../../assets/icon-arrow-down.svg";
import { useState } from "react";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Wrapper onClick={() => setIsOpen(!isOpen)}>
        Filter
        <img src={arrowDown} />
      </S.Wrapper>
      {isOpen && (
        <S.OptionsWrapper>
          <S.Options>
            <div>Draft</div>
            <div>Pending</div>
            <div>Paid</div>
          </S.Options>
        </S.OptionsWrapper>
      )}
    </>
  );
};
