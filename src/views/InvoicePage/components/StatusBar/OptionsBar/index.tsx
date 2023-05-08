import { OptionButton } from "../../OptionsBarMobile/OptionButton";
import { EditInvoiceModal } from "../EditInvoice";
import { Invoice } from "../../../../types";
import { useState } from "react";
import * as S from "./styles";

interface IOptionsBar {
  id: string;
  status: string;
  showModal: boolean;
  setInvoiceStatus: (status: string) => void;
  setShowModal: (showModal: boolean) => void;
  setShowEditInvoiceModal: (showModal: boolean) => void;
}

export const OptionsBar = ({
  id,
  status,
  showModal,
  setInvoiceStatus,
  setShowModal,
  setShowEditInvoiceModal,
}: IOptionsBar) => {
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

  return (
    <S.OptionsBarContainer>
      <OptionButton
        text="Edit"
        color="#252945"
        handleClick={() => setShowEditInvoiceModal(true)}
      />
      <OptionButton
        text="Delete"
        color="#EC5757"
        handleClick={openDeleteModal}
      />
      <OptionButton
        text="Mark as Paid"
        color="#7C5DFA"
        disabled={["paid", "draft"].includes(status)}
        handleClick={markAsPaid}
      />
    </S.OptionsBarContainer>
  );
};
