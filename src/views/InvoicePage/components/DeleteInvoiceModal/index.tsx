import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { Theme } from "../../../../themes/types";
import * as S from "./styles";
import "./styles.css";

import { useTranslation } from "react-i18next";
import ReactModal from "react-modal";
import Modal from "react-modal";

interface IDeleteInvoiceModal {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  id: string;
  goBackRef: React.RefObject<HTMLAnchorElement>;
}

export const DeleteInvoiceModal = ({
  showModal,
  setShowModal,
  id,
  goBackRef,
}: IDeleteInvoiceModal) => {
  const { t } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width < 481);
  const theme: Theme = useContext(ThemeContext);
  const maxWidth = isMobile ? "327px" : "480px";
  const padding = isMobile ? "32px" : "48px";

  Modal.setAppElement("#root");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(12,14,22,0.75)",
    },
    content: {
      display: "block",
      maxHeight: "calc(100vh - 72px)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      border: "none",
      backgroundColor: theme.colors.bodyCards,
      padding: padding,
      maxWidth: maxWidth,
      margin: "0 auto",
      width: "100%",
    },
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    setIsMobile(width < 481);
  }, [width]);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const deleteInvoice = () => {
    const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    const newInvoices = invoices.filter((invoice: any) => invoice.id !== id);
    localStorage.setItem("invoices", JSON.stringify(newInvoices));
    closeModal();
    goBackRef.current?.click();
  };

  return (
    <ReactModal
      isOpen={showModal}
      style={customStyles}
      preventScroll={true}
      bodyOpenClassName="ReactModal__Body--open"
      onRequestClose={() => closeModal()}
      shouldCloseOnOverlayClick={true}
    >
      <S.Title>{t("invoicePage.deleteInvoiceModal.title")}</S.Title>
      <S.Description>
        {t("invoicePage.deleteInvoiceModal.message")} #{id}?{" "}
        {t("invoicePage.deleteInvoiceModal.warning")}
      </S.Description>
      <S.ButtonsContainer>
        <S.Button
          color={theme.colors.valuesDescriptionContainer}
          onClick={() => closeModal()}
        >
          {t("invoicePage.deleteInvoiceModal.cancel")}
        </S.Button>
        <S.Button color="#EC5757" onClick={() => deleteInvoice()}>
          {t("invoicePage.deleteInvoiceModal.delete")}
        </S.Button>
      </S.ButtonsContainer>
    </ReactModal>
  );
};
