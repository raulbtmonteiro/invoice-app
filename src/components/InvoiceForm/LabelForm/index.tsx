import * as S from "./styles";

interface ILabelForm {
  htmlFor: string;
  children: string;
}

export const LabelForm = ({ htmlFor, children }: ILabelForm) => {
  return <S.Label htmlFor={htmlFor}>{children}</S.Label>;
};
