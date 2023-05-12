import icon from "../../../../assets/images/main-icon.svg";
import { useState } from "react";
import * as S from "./styles";

interface ILoading {
  children: React.ReactNode;
}

export const Loading = ({ children }: ILoading) => {
  const [loading, setLoading] = useState(true);

  const simulateAPICall = setTimeout(() => {
    setLoading(false);
  }, 1300);

  simulateAPICall;

  return (
    <>
      {loading ? (
        <S.Container>
          <img src={icon} />
        </S.Container>
      ) : (
        children
      )}
    </>
  );
};
