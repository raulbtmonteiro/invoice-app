import * as S from "./styles";

interface IGridLocator {
  gridArea: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const GridLocator = ({ gridArea, children, onClick }: IGridLocator) => {
  return (
    <S.GridLocator gridArea={gridArea} onClick={onClick}>
      {children}
    </S.GridLocator>
  );
};
