import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { InvoiceFactory, idGenerator } from "../../utils";
import { SelectionZone } from "./SelectionZone";
import { Invoice } from "../../views/types";
import { GridLocator } from "./GridLocator";
import { LabelForm } from "./LabelForm";
import { InputForm } from "./InputForm";
import { ItemList } from "./ItemList";
import * as S from "./styles";

interface IInvoiceForm {
  invoice: Invoice | null;
  type: "new" | "edit";
  setShowModal: (newInvoice: boolean) => void;
}

export const InvoiceForm = ({ invoice, type, setShowModal }: IInvoiceForm) => {
  const title = type === "new" ? "New Invoice" : `Edit #${invoice?.id}`;

  const handleGoBackClick = () => {
    document.body.style.overflow = "auto";
    setShowModal(false);
  };

  const handleSubmit = (data: any) => {
    data.preventDefault();
    if (invoice === null) {
      const id = idGenerator();
      const status =
        data.nativeEvent.submitter.id === "save-as-draft" ? "draft" : "pending";
      //const newInvoice = InvoiceFactory(data.target.elements, id, status);
      //newInvoice.toSave();
      return false;
    }
    const newInvoice = InvoiceFactory(
      data.target.elements,
      invoice.id,
      invoice.status
    );
    newInvoice.toPrint();
    newInvoice.toUpload();
    handleGoBackClick();
  };

  return (
    <S.Container onSubmitCapture={(data) => handleSubmit(data)}>
      <S.Back onClick={() => handleGoBackClick()}>
        <img src={arrowLeft} alt="arrow-left" />
        Go Back
      </S.Back>
      <S.Title>{title}</S.Title>
      <S.ScrollZone>
        <div>
          <S.SectionTitle>Bill From</S.SectionTitle>
          <S.FormFrom>
            <GridLocator gridArea="street">
              <LabelForm htmlFor="senderAddressStreet" isVisible={true}>
                Street Address
              </LabelForm>
              <InputForm
                type="text"
                id="senderAddressStreet"
                inicialValue={invoice?.senderAddress.street}
              />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="senderAddressCity" isVisible={true}>
                City
              </LabelForm>
              <InputForm
                type="text"
                id="senderAddressCity"
                inicialValue={invoice?.senderAddress.city}
              />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="senderAddressPostCode" isVisible={true}>
                Post Code
              </LabelForm>
              <InputForm
                type="string"
                id="senderAddressPostCode"
                inicialValue={invoice?.senderAddress.postCode}
              />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="senderAddressCountry" isVisible={true}>
                Country
              </LabelForm>
              <InputForm
                type="text"
                id="senderAddressCountry"
                inicialValue={invoice?.senderAddress.country}
              />
            </GridLocator>
          </S.FormFrom>
        </div>
        <div>
          <S.SectionTitle>Bill To</S.SectionTitle>
          <S.FormTo>
            <GridLocator gridArea="name">
              <LabelForm htmlFor="clientName" isVisible={true}>
                Client's Name
              </LabelForm>
              <InputForm
                type="text"
                id="clientName"
                inicialValue={invoice?.clientName}
              />
            </GridLocator>
            <GridLocator gridArea="email">
              <LabelForm htmlFor="clientEmail" isVisible={true}>
                Client's Email
              </LabelForm>
              <InputForm
                type="email"
                id="clientEmail"
                inicialValue={invoice?.clientEmail}
              />
            </GridLocator>
            <GridLocator gridArea="address">
              <LabelForm htmlFor="clientAddressStreet" isVisible={true}>
                Street Address
              </LabelForm>
              <InputForm
                type="text"
                id="clientAddressStreet"
                inicialValue={invoice?.clientAddress.street}
              />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="clientAddressCity" isVisible={true}>
                City
              </LabelForm>
              <InputForm
                type="text"
                id="clientAddressCity"
                inicialValue={invoice?.clientAddress.city}
              />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="clientAddressPostCode" isVisible={true}>
                Post Code
              </LabelForm>
              <InputForm
                type="string"
                id="clientAddressPostCode"
                inicialValue={invoice?.clientAddress.postCode}
              />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="clientAddressCountry" isVisible={true}>
                Country
              </LabelForm>
              <InputForm
                type="text"
                id="clientAddressCountry"
                inicialValue={invoice?.clientAddress.country}
              />
            </GridLocator>
            <GridLocator gridArea="flex">
              <S.Wrapper>
                <LabelForm htmlFor="createdAt" isVisible={true}>
                  Invoice Date
                </LabelForm>
                <InputForm
                  type="date"
                  id="createdAt"
                  inicialValue={invoice?.createdAt}
                />
              </S.Wrapper>
              <S.Wrapper>
                <LabelForm htmlFor="paymentTerms" isVisible={true}>
                  Payment Terms
                </LabelForm>
                <InputForm
                  type="text"
                  id="paymentTerms"
                  inicialValue={invoice?.paymentTerms}
                />
              </S.Wrapper>
            </GridLocator>
            <GridLocator gridArea="description">
              <LabelForm htmlFor="description" isVisible={true}>
                Project Description
              </LabelForm>
              <InputForm
                type="text"
                id="description"
                inicialValue={invoice?.description}
              />
            </GridLocator>
            <GridLocator gridArea="itemList">
              <ItemList invoice={invoice} />
            </GridLocator>
          </S.FormTo>
        </div>
      </S.ScrollZone>
      <SelectionZone type={type} handleGoBack={handleGoBackClick} />
    </S.Container>
  );
};
