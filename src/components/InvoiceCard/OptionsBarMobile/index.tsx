import { OptionButton } from './OptionButton';
import * as S from './styles';

export const OptionsBarMobile = () => {

  return (
    <S.OptionsBarContainer>
      <OptionButton text='Edit' color='#252945'/>
      <OptionButton text='Delete' color='#EC5757'/>
      <OptionButton text='Mark as Paid' color='#7C5DFA'/>
    </S.OptionsBarContainer>
  )
};