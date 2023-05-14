import { useState } from "react";
import * as S from "./styles";

interface IInputForm {
  type: string;
  id: string;
  inicialValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm = ({ type, id, inicialValue, onChange }: IInputForm) => {
  const INITIAL_STATE = inicialValue ? inicialValue : "";
  const [value, setValue] = useState<string | number>(INITIAL_STATE);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <S.Input
      type={type}
      id={id}
      value={value}
      onChange={(e) => handleOnChange(e)}
    />
  );
};
