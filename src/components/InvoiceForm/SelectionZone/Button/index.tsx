import * as S from "./styles";

interface IButton {
  children: string;
  id?: string;
  backgroundColor: string;
  textColor: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  id,
  backgroundColor,
  textColor,
  onClick,
  type,
}: IButton) => {
  return (
    <S.Button
      id={id}
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      type={type}
    >
      {children}
    </S.Button>
  );
};
