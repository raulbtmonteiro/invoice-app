import { InvoiceForm } from "../../../../../components";
import { Invoice } from "../../../../types";
import * as S from "./styles";

import { useParams } from "react-router-dom";

interface IEditInvoiceModal {
  showEditInvoiceModal: boolean;
  setShowEditInvoiceModal: (newInvoice: boolean) => void;
}

export const EditInvoiceModal = ({
  showEditInvoiceModal,
  setShowEditInvoiceModal,
}: IEditInvoiceModal) => {
  const handleOverlayClick = () => {
    document.body.style.overflow = "auto";
    setShowEditInvoiceModal(false);
  };

  const { id } = useParams<{ id: string }>();
  const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
  const invoice = invoices.find((invoice: Invoice) => invoice.id === id);

  return (
    <>
      <S.Container isModalOpen={showEditInvoiceModal}>
        <InvoiceForm
          invoice={invoice}
          type="edit"
          setShowModal={setShowEditInvoiceModal}
        />
      </S.Container>
      <S.Overlay
        isModalOpen={showEditInvoiceModal}
        onClick={() => handleOverlayClick()}
      />
    </>
  );
};
