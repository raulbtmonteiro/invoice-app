import { InvoiceForm } from "../../../../../components";
import * as S from "./styles";

interface IEditInvoiceModal {
  showEditInvoiceModal: boolean;
  setShowEditInvoiceModal: (newInvoice: boolean) => void;
}

export const EditInvoiceModal = ({
  showEditInvoiceModal,
  setShowEditInvoiceModal,
}: IEditInvoiceModal) => {
  return (
    <>
      <S.Container isModalOpen={showEditInvoiceModal}>
        <InvoiceForm type="edit" setShowModal={setShowEditInvoiceModal} />
      </S.Container>
      <S.Overlay
        isModalOpen={showEditInvoiceModal}
        onClick={() => setShowEditInvoiceModal(false)}
      />
    </>
  );
};
