import { selectStatusColor } from "../../../../utils";
import { ThemeContext } from "styled-components";
import { Theme } from "../../../../themes/types";
import { useContext, useState } from "react";
import { OptionsBar } from "./OptionsBar";
import * as S from "./styles";
import { EditInvoiceModal } from "./EditInvoice";

interface ISetupBar {
  id: string;
  status: string;
  showModal: boolean;
  setInvoiceStatus: (status: string) => void;
  setShowModal: (showModal: boolean) => void;
  showEditInvoiceModal: boolean;
  setShowEditInvoiceModal: (showModal: boolean) => void;
}

export const StatusBar = ({
  id,
  status,
  showModal,
  setInvoiceStatus,
  setShowModal,
  showEditInvoiceModal,
  setShowEditInvoiceModal,
}: ISetupBar) => {
  const theme: Theme = useContext(ThemeContext);

  return (
    <S.StatusContainer>
      <EditInvoiceModal
        showEditInvoiceModal={showEditInvoiceModal}
        setShowEditInvoiceModal={setShowEditInvoiceModal}
      />
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
        setShowEditInvoiceModal={setShowEditInvoiceModal}
      />
    </S.StatusContainer>
  );
};
