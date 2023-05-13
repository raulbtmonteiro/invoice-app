import * as S from "./styles";
import { Button } from "./Button";

interface ISelectionZone {
  type: string;
}

export const SelectionZone = ({ type }: ISelectionZone) => {
  return (
    <S.Container type={type}>
      {type === "new" && (
        <Button backgroundColor="#F9FAFE" textColor="#7E88C3">
          Discard
        </Button>
      )}
      <S.Flex>
        <Button
          backgroundColor={type === "new" ? "#373B53" : "#F9FAFE"}
          textColor={type === "new" ? "#888EB0" : "#7E88C3"}
        >
          {type === "new" ? "Save as Draft" : "Cancel"}
        </Button>
        <Button backgroundColor="#7C5DFA" textColor="#FFF">
          {type === "new" ? "Save & Send" : "Save Changes"}
        </Button>
      </S.Flex>
    </S.Container>
  );
};
