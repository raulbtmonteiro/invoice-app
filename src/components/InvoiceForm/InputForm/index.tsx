import { useState } from "react";
import * as S from "./styles";

interface IInputForm {
  type: string;
  id: string;
}

export const InputForm = ({ type, id }: IInputForm) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <S.Input
      type={type}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
