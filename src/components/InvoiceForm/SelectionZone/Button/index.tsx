import * as S from "./styles";

interface IButton {
  children: string;
  backgroundColor: string;
  textColor: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  backgroundColor,
  textColor,
  onClick,
}: IButton) => {
  return (
    <S.Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </S.Button>
  );
};
