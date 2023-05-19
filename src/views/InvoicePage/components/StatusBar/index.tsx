import { selectStatusColor } from "../../../../utils";
import { ThemeContext } from "styled-components";
import { EditInvoiceModal } from "./EditInvoice";
import { Theme } from "../../../../themes/types";
import { OptionsBar } from "./OptionsBar";
import { useContext } from "react";
import * as S from "./styles";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const theme: Theme = useContext(ThemeContext);

  return (
    <S.StatusContainer>
      <EditInvoiceModal
        showEditInvoiceModal={showEditInvoiceModal}
        setShowEditInvoiceModal={setShowEditInvoiceModal}
      />
      <S.StatusWrapper>
        {t("invoicePage.statusBar.status")}
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
