import { OptionButton } from "./OptionButton";
import { Invoice } from "../../../types";
import * as S from "./styles";

import { useTranslation } from "react-i18next";

interface IOptionsBarMobile {
  id: string;
  status: string;
  showModal: boolean;
  setInvoiceStatus: (status: string) => void;
  setShowModal: (showModal: boolean) => void;
  setShowEditInvoiceModal: (showModal: boolean) => void;
}

export const OptionsBarMobile = ({
  id,
  status,
  showModal,
  setInvoiceStatus,
  setShowModal,
  setShowEditInvoiceModal,
}: IOptionsBarMobile) => {
  const { t } = useTranslation();
  const openDeleteModal = () => {
    setShowModal(!showModal);
  };

  const markAsPaid = () => {
    const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    const newInvoices = invoices.map((invoice: Invoice) => {
      if (invoice.id === id) {
        return { ...invoice, status: "paid" };
      }
      return invoice;
    });
    localStorage.setItem("invoices", JSON.stringify(newInvoices));
    setInvoiceStatus("paid");
  };

  const handleEditClick = () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setShowEditInvoiceModal(true);
  };

  return (
    <S.OptionsBarContainer>
      <OptionButton
        text={t("invoicePage.optionsBar.markAsPaid")}
        color="#252945"
        handleClick={() => handleEditClick()}
      />
      <OptionButton
        text={t("invoicePage.optionsBar.markAsPaid")}
        color="#EC5757"
        handleClick={openDeleteModal}
      />
      <OptionButton
        text={t("invoicePage.optionsBar.markAsPaid")}
        color="#7C5DFA"
        disabled={["paid", "draft"].includes(status)}
        handleClick={markAsPaid}
      />
    </S.OptionsBarContainer>
  );
};
