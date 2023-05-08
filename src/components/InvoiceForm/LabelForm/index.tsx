import * as S from "./styles";

interface ILabelForm {
  htmlFor: string;
  children: string;
  isVisible: boolean;
}

export const LabelForm = ({ htmlFor, children, isVisible }: ILabelForm) => {
  return (
    <S.Label htmlFor={htmlFor} isVisible={isVisible}>
      {children}
    </S.Label>
  );
};
