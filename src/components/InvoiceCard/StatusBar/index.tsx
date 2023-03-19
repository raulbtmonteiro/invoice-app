import { selectStatusColor } from "../../../utils";
import { ThemeContext } from "styled-components";
import { Template } from "../../../themes/types";
import { OptionsBar } from "./OptionsBar";
import { useContext } from "react";
import * as S from "./styles";

interface ISetupBar {
  id: string;
  status: string;
  showModal: boolean;
  setInvoiceStatus: (status: string) => void;
  setShowModal: (showModal: boolean) => void;
}

export const StatusBar = ({
  id,
  status,
  showModal,
  setInvoiceStatus,
  setShowModal,
}: ISetupBar) => {
  const theme: Template = useContext(ThemeContext);

  return (
    <S.StatusContainer>
      <S.StatusWrapper>
        Status
        <S.Status theme={selectStatusColor(theme, status)}>
          <div></div>
          {status}
        </S.Status>
      </S.StatusWrapper>
      <OptionsBar
        id={id}
        status={status}
        showModal={showModal}
        setShowModal={setShowModal}
        setInvoiceStatus={setInvoiceStatus}
      />
    </S.StatusContainer>
  );
};
