import { OptionButton } from "../../OptionsBarMobile/OptionButton";
import * as S from "./styles";

interface IOptionsBar {
  status: string;
}

export const OptionsBar = ({ status }: IOptionsBar) => {
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
