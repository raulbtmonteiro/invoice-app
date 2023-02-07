import * as S from "./styles";
import arrowDown from "../../../assets/icon-arrow-down.svg";
import { useRef, useState } from "react";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<HTMLImageElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(arrowRef.current);
  };

  return (
    <>
      <S.Wrapper onClick={() => handleClick()}>
        Filter
        <img src={arrowDown} ref={arrowRef} />
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
