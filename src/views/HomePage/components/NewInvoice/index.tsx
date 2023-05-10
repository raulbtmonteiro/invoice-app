import { InvoiceForm } from "../../../../components";
import * as S from "./styles";

interface INewInvoiceModal {
  showNewInvoiceModal: boolean;
  setShowNewInvoiceModal: (newInvoice: boolean) => void;
}

export const NewInvoiceModal = ({
  showNewInvoiceModal,
  setShowNewInvoiceModal,
}: INewInvoiceModal) => {
  const handleOverlayClick = () => {
    document.body.style.overflow = "auto";
    setShowNewInvoiceModal(false);
  };

  return (
    <>
      <S.Container isModalOpen={showNewInvoiceModal}>
        <InvoiceForm
          invoice={null}
          type="new"
          setShowModal={setShowNewInvoiceModal}
        />
      </S.Container>
      <S.Overlay
        isModalOpen={showNewInvoiceModal}
        onClick={() => handleOverlayClick()}
      />
    </>
  );
};
