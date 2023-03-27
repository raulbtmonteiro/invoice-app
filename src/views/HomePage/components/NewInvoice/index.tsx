import * as S from "./styles";

interface INewInvoiceModal {
  newInvoice: boolean;
  setNewInvoice: (newInvoice: boolean) => void;
}

export const NewInvoiceModal = ({
  newInvoice,
  setNewInvoice,
}: INewInvoiceModal) => {
  return (
    <>
      <S.Container isModalOpen={newInvoice}>
        <p>New</p>
      </S.Container>
      <S.Overlay
        isModalOpen={newInvoice}
        onClick={() => setNewInvoice(false)}
      />
    </>
  );
};
