import * as S from "./styles";

interface IOptionButton {
  text: string;
  color: string;
  disabled?: boolean;
  handleClick?: () => void;
}

export const OptionButton = ({
  text,
  color,
  disabled,
  handleClick,
}: IOptionButton) => {
  return (
    <S.Button color={color} disabled={disabled} onClick={handleClick}>
      {text}
    </S.Button>
  );
};
