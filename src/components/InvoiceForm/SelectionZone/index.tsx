import { Button } from "./Button";
import * as S from "./styles";

interface ISelectionZone {
  type: string;
  handleGoBack?: () => void;
}

export const SelectionZone = ({ type, handleGoBack }: ISelectionZone) => {
  return (
    <S.Container type={type}>
      {type === "new" && (
        <Button
          backgroundColor="#F9FAFE"
          textColor="#7E88C3"
          type="reset"
          onClick={handleGoBack}
        >
          Discard
        </Button>
      )}
      <S.Flex>
        <Button
          id={type === "new" ? "save-as-draft" : ""}
          backgroundColor={type === "new" ? "#373B53" : "#F9FAFE"}
          textColor={type === "new" ? "#888EB0" : "#7E88C3"}
          type={type === "new" ? "submit" : "reset"}
          onClick={type === "edit" ? handleGoBack : undefined}
        >
          {type === "new" ? "Save as Draft" : "Cancel"}
        </Button>
        <Button backgroundColor="#7C5DFA" textColor="#FFF" type="submit">
          {type === "new" ? "Save & Send" : "Save Changes"}
        </Button>
      </S.Flex>
    </S.Container>
  );
};
