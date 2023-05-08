import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { useParams } from "react-router-dom";
import { LabelForm } from "./LabelForm";
import { InputForm } from "./InputForm";
import * as S from "./styles";
import { ItemList } from "./ItemList";

interface IInvoiceForm {
  type: "new" | "edit";
  setShowModal: (newInvoice: boolean) => void;
}

export const InvoiceForm = ({ type, setShowModal }: IInvoiceForm) => {
  const params = useParams();
  const title = type === "new" ? "New Invoice" : `Edit #${params.id}`;

  return (
    <S.Container>
      <S.Back onClick={() => setShowModal(false)}>
        <img src={arrowLeft} alt="arrow-left" />
        Go Back
      </S.Back>
      <S.Title>{title}</S.Title>
      <S.ScrollZone>
        <div>
          <S.SectionTitle>Bill From</S.SectionTitle>
          <S.FormFrom>
            <S.ContainerItem gridArea="street">
              <LabelForm htmlFor="streetAddress">Street Address</LabelForm>
              <InputForm type="text" id="streetAddress" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="city">
              <LabelForm htmlFor="city">City</LabelForm>
              <InputForm type="text" id="city" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="postCode">
              <LabelForm htmlFor="postCode">Post Code</LabelForm>
              <InputForm type="text" id="postCode" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="country">
              <LabelForm htmlFor="country">Country</LabelForm>
              <InputForm type="text" id="country" />
            </S.ContainerItem>
          </S.FormFrom>
        </div>
        <div>
          <S.SectionTitle>Bill To</S.SectionTitle>
          <S.FormTo>
            <S.ContainerItem gridArea="name">
              <LabelForm htmlFor="clientName">Client's Name</LabelForm>
              <InputForm type="text" id="clientName" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="email">
              <LabelForm htmlFor="clientEmail">Client's Email</LabelForm>
              <InputForm type="text" id="clientEmail" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="address">
              <LabelForm htmlFor="streetAddress">Street Address</LabelForm>
              <InputForm type="text" id="streetAddress" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="city">
              <LabelForm htmlFor="city">City</LabelForm>
              <InputForm type="text" id="city" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="postCode">
              <LabelForm htmlFor="postCode">Post Code</LabelForm>
              <InputForm type="text" id="postCode" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="country">
              <LabelForm htmlFor="country">Country</LabelForm>
              <InputForm type="text" id="country" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="flex">
              <div>
                <LabelForm htmlFor="invoiceDate">Invoice Date</LabelForm>
                <InputForm type="text" id="invoiceDate" />
              </div>
              <div>
                <LabelForm htmlFor="paymentTerms">Payment Terms</LabelForm>
                <InputForm type="text" id="paymentTerms" />
              </div>
            </S.ContainerItem>
            <S.ContainerItem gridArea="description">
              <LabelForm htmlFor="description">Project Description</LabelForm>
              <InputForm type="text" id="description" />
            </S.ContainerItem>
            <S.ContainerItem gridArea="itemList">
              <ItemList />
            </S.ContainerItem>
          </S.FormTo>
        </div>
      </S.ScrollZone>
      <S.SelectionZone />
    </S.Container>
  );
};
