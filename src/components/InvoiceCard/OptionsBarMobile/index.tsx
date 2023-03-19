import { Invoice } from "../../InvoiceDisplay/types";
import { OptionButton } from "./OptionButton";
import * as S from "./styles";

interface IOptionsBarMobile {
  id: string;
  status: string;
  showModal: boolean;
  setInvoiceStatus: (status: string) => void;
  setShowModal: (showModal: boolean) => void;
}

export const OptionsBarMobile = ({
  id,
  status,
  showModal,
  setInvoiceStatus,
  setShowModal,
}: IOptionsBarMobile) => {
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
      <OptionButton text="Edit" color="#252945" />
      <OptionButton
        text="Delete"
        color="#EC5757"
        handleClick={openDeleteModal}
      />
      <OptionButton
        text="Mark as Paid"
        color="#7C5DFA"
        disabled={status == "paid" && true}
        handleClick={markAsPaid}
      />
    </S.OptionsBarContainer>
  );
};
