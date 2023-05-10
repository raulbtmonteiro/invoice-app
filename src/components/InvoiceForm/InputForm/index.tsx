import { useState } from "react";
import * as S from "./styles";

interface IInputForm {
  type: string;
  id: string;
  inicialValue?: string | number;
}

export const InputForm = ({ type, id, inicialValue }: IInputForm) => {
  const INITIAL_STATE = inicialValue ? inicialValue : "";
  const [value, setValue] = useState<string | number>(INITIAL_STATE);

  return (
    <S.Input
      type={type}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
