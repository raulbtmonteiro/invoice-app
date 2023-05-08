import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { GridLocator } from "./GridLocator";
import { LabelForm } from "./LabelForm";
import { InputForm } from "./InputForm";
import { ItemList } from "./ItemList";
import * as S from "./styles";

import { useParams } from "react-router-dom";

interface IInvoiceForm {
  type: "new" | "edit";
  setShowModal: (newInvoice: boolean) => void;
}

export const InvoiceForm = ({ type, setShowModal }: IInvoiceForm) => {
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
              <InputForm type="text" id="streetAddress" />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="city" isVisible={true}>
                City
              </LabelForm>
              <InputForm type="text" id="city" />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="postCode" isVisible={true}>
                Post Code
              </LabelForm>
              <InputForm type="text" id="postCode" />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="country" isVisible={true}>
                Country
              </LabelForm>
              <InputForm type="text" id="country" />
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
              <InputForm type="text" id="clientName" />
            </GridLocator>
            <GridLocator gridArea="email">
              <LabelForm htmlFor="clientEmail" isVisible={true}>
                Client's Email
              </LabelForm>
              <InputForm type="text" id="clientEmail" />
            </GridLocator>
            <GridLocator gridArea="address">
              <LabelForm htmlFor="streetAddress" isVisible={true}>
                Street Address
              </LabelForm>
              <InputForm type="text" id="streetAddress" />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="city" isVisible={true}>
                City
              </LabelForm>
              <InputForm type="text" id="city" />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="postCode" isVisible={true}>
                Post Code
              </LabelForm>
              <InputForm type="text" id="postCode" />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="country" isVisible={true}>
                Country
              </LabelForm>
              <InputForm type="text" id="country" />
            </GridLocator>
            <GridLocator gridArea="flex">
              <S.Wrapper>
                <LabelForm htmlFor="invoiceDate" isVisible={true}>
                  Invoice Date
                </LabelForm>
                <InputForm type="text" id="invoiceDate" />
              </S.Wrapper>
              <S.Wrapper>
                <LabelForm htmlFor="paymentTerms" isVisible={true}>
                  Payment Terms
                </LabelForm>
                <InputForm type="text" id="paymentTerms" />
              </S.Wrapper>
            </GridLocator>
            <GridLocator gridArea="description">
              <LabelForm htmlFor="description" isVisible={true}>
                Project Description
              </LabelForm>
              <InputForm type="text" id="description" />
            </GridLocator>
            <GridLocator gridArea="itemList">
              <ItemList />
            </GridLocator>
          </S.FormTo>
        </div>
      </S.ScrollZone>
      <S.SelectionZone />
    </S.Container>
  );
};
