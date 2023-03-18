import * as S from './styles';

interface IOptionButton {
  text: string;
  color: string;
}

export const OptionButton = ({text, color}: IOptionButton) => {

  return (
    <S.Button color={color}>
      {text}
    </S.Button>
  )
};