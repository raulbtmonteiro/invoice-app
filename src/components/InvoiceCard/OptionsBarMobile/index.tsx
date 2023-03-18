import { OptionButton } from "./OptionButton";
import * as S from "./styles";

interface IOptionsBarMobile {
  status: string;
}

export const OptionsBarMobile = ({ status }: IOptionsBarMobile) => {
  return (
    <S.OptionsBarContainer>
      <OptionButton text="Edit" color="#252945" />
      <OptionButton text="Delete" color="#EC5757" />
      <OptionButton
        text="Mark as Paid"
        color="#7C5DFA"
        disabled={status == "paid" && true}
      />
    </S.OptionsBarContainer>
  );
};
