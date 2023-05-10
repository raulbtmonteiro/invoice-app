import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { Invoice } from "../../views/types";
import { GridLocator } from "./GridLocator";
import { LabelForm } from "./LabelForm";
import { InputForm } from "./InputForm";
import { ItemList } from "./ItemList";
import * as S from "./styles";

import { useParams } from "react-router-dom";

interface IInvoiceForm {
  invoice: Invoice | null;
  type: "new" | "edit";
  setShowModal: (newInvoice: boolean) => void;
}

export const InvoiceForm = ({ invoice, type, setShowModal }: IInvoiceForm) => {
  const params = useParams();
  const title = type === "new" ? "New Invoice" : `Edit #${params.id}`;

  const handleGoBackClick = () => {
    document.body.style.overflow = "auto";
    setShowModal(false);
  };

  return (
    <S.Container>
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
              <LabelForm htmlFor="streetAddress" isVisible={true}>
                Street Address
              </LabelForm>
              <InputForm
                type="text"
                id="streetAddress"
                inicialValue={invoice?.senderAddress.street}
              />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="city" isVisible={true}>
                City
              </LabelForm>
              <InputForm
                type="text"
                id="city"
                inicialValue={invoice?.senderAddress.city}
              />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="postCode" isVisible={true}>
                Post Code
              </LabelForm>
              <InputForm
                type="number"
                id="postCode"
                inicialValue={invoice?.senderAddress.postCode}
              />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="country" isVisible={true}>
                Country
              </LabelForm>
              <InputForm
                type="text"
                id="country"
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
              <LabelForm htmlFor="streetAddress" isVisible={true}>
                Street Address
              </LabelForm>
              <InputForm
                type="text"
                id="streetAddress"
                inicialValue={invoice?.clientAddress.street}
              />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="city" isVisible={true}>
                City
              </LabelForm>
              <InputForm
                type="text"
                id="city"
                inicialValue={invoice?.clientAddress.city}
              />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="postCode" isVisible={true}>
                Post Code
              </LabelForm>
              <InputForm
                type="number"
                id="postCode"
                inicialValue={invoice?.clientAddress.postCode}
              />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="country" isVisible={true}>
                Country
              </LabelForm>
              <InputForm
                type="text"
                id="country"
                inicialValue={invoice?.clientAddress.country}
              />
            </GridLocator>
            <GridLocator gridArea="flex">
              <S.Wrapper>
                <LabelForm htmlFor="invoiceDate" isVisible={true}>
                  Invoice Date
                </LabelForm>
                <InputForm
                  type="date"
                  id="invoiceDate"
                  inicialValue={invoice?.paymentDue}
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
      <S.SelectionZone />
    </S.Container>
  );
};
