import { OptionButton } from "../../OptionsBarMobile/OptionButton";
import * as S from "./styles";

interface IOptionsBar {
  status: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const OptionsBar = ({
  status,
  showModal,
  setShowModal,
}: IOptionsBar) => {
  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <S.OptionsBarContainer>
      <OptionButton text="Edit" color="#252945" />
      <OptionButton text="Delete" color="#EC5757" handleClick={handleClick} />
      <OptionButton
        text="Mark as Paid"
        color="#7C5DFA"
        disabled={status == "paid" && true}
      />
    </S.OptionsBarContainer>
  );
};
