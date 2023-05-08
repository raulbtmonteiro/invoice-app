import * as S from "./styles";

interface IInputForm {
  type: string;
  id: string;
}

export const InputForm = ({ type, id }: IInputForm) => {
  return <S.Input type={type} id={id} />;
};
