import { Button } from "./Button";
import * as S from "./styles";

import { useTranslation } from "react-i18next";

interface ISelectionZone {
  type: string;
  handleGoBack?: () => void;
}

export const SelectionZone = ({ type, handleGoBack }: ISelectionZone) => {
  const { t } = useTranslation();

  return (
    <S.Container type={type}>
      {type === "new" && (
        <Button
          backgroundColor="#F9FAFE"
          textColor="#7E88C3"
          type="reset"
          onClick={handleGoBack}
        >
          {t("components.invoiceForm.selectionZone.discard")}
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
          {type === "new"
            ? t("components.invoiceForm.selectionZone.saveDraft")
            : t("components.invoiceForm.selectionZone.cancel")}
        </Button>
        <Button backgroundColor="#7C5DFA" textColor="#FFF" type="submit">
          {type === "new"
            ? t("components.invoiceForm.selectionZone.saveSend")
            : t("components.invoiceForm.selectionZone.saveChanges")}
        </Button>
      </S.Flex>
    </S.Container>
  );
};
