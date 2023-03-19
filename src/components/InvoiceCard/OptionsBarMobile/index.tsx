import { OptionButton } from "./OptionButton";
import * as S from "./styles";

interface IOptionsBarMobile {
  status: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const OptionsBarMobile = ({
  status,
  showModal,
  setShowModal,
}: IOptionsBarMobile) => {
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
