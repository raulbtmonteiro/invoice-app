import * as S from "./styles";

interface IOptionButton {
  text: string;
  color: string;
  disabled?: boolean;
}

export const OptionButton = ({ text, color, disabled }: IOptionButton) => {
  return (
    <S.Button color={color} disabled={disabled}>
      {text}
    </S.Button>
  );
};
