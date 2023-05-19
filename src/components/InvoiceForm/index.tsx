import { InvoiceFactory, formValidation, idGenerator } from "../../utils";
import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { SelectionZone } from "./SelectionZone";
import { Invoice } from "../../views/types";
import { GridLocator } from "./GridLocator";
import { LabelForm } from "./LabelForm";
import { InputForm } from "./InputForm";
import { ItemList } from "./ItemList";
import { useState } from "react";
import * as S from "./styles";
import "./styles.css";

import { useTranslation } from "react-i18next";

interface IInvoiceForm {
  invoice: Invoice | null;
  type: "new" | "edit";
  setShowModal: (newInvoice: boolean) => void;
}

export const InvoiceForm = ({ invoice, type, setShowModal }: IInvoiceForm) => {
  const { t } = useTranslation();
  const title =
    type === "new"
      ? t("components.invoiceForm.title.new")
      : `${t("components.invoiceForm.title.edit")} #${invoice?.id}`;
  const [error, setError] = useState<string | null>();

  const handleGoBackClick = () => {
    document.body.style.overflow = "auto";
    setShowModal(false);
    setError(null);
  };

  const handleSubmit = (data: any) => {
    data.preventDefault();
    try {
      formValidation(data);
    } catch (err: any) {
      setError(err.message);
      return;
    }
    if (invoice === null) {
      const id = idGenerator();
      const status =
        data.nativeEvent.submitter.id === "save-as-draft" ? "draft" : "pending";
      const newInvoice = InvoiceFactory(data.target.elements, id, status);
      newInvoice.toSave();
      handleGoBackClick();
      return;
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
        {t("components.invoiceForm.goBack")}
      </S.Back>
      <S.Title>{title}</S.Title>
      <S.ScrollZone>
        <div>
          <S.SectionTitle>
            {t("components.invoiceForm.billFrom")}
          </S.SectionTitle>
          <S.FormFrom>
            <GridLocator gridArea="street">
              <LabelForm htmlFor="senderAddressStreet" isVisible={true}>
                {t("components.invoiceForm.streetAddress")}
              </LabelForm>
              <InputForm
                type="text"
                id="senderAddressStreet"
                inicialValue={invoice?.senderAddress.street}
              />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="senderAddressCity" isVisible={true}>
                {t("components.invoiceForm.city")}
              </LabelForm>
              <InputForm
                type="text"
                id="senderAddressCity"
                inicialValue={invoice?.senderAddress.city}
              />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="senderAddressPostCode" isVisible={true}>
                {t("components.invoiceForm.postCode")}
              </LabelForm>
              <InputForm
                type="string"
                id="senderAddressPostCode"
                inicialValue={invoice?.senderAddress.postCode}
              />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="senderAddressCountry" isVisible={true}>
                {t("components.invoiceForm.country")}
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
          <S.SectionTitle>{t("components.invoiceForm.billTo")}</S.SectionTitle>
          <S.FormTo>
            <GridLocator gridArea="name">
              <LabelForm htmlFor="clientName" isVisible={true}>
                {t("components.invoiceForm.clientName")}
              </LabelForm>
              <InputForm
                type="text"
                id="clientName"
                inicialValue={invoice?.clientName}
              />
            </GridLocator>
            <GridLocator gridArea="email">
              <LabelForm htmlFor="clientEmail" isVisible={true}>
                {t("components.invoiceForm.clientEmail")}
              </LabelForm>
              <InputForm
                type="email"
                id="clientEmail"
                inicialValue={invoice?.clientEmail}
              />
            </GridLocator>
            <GridLocator gridArea="address">
              <LabelForm htmlFor="clientAddressStreet" isVisible={true}>
                {t("components.invoiceForm.streetAddress")}
              </LabelForm>
              <InputForm
                type="text"
                id="clientAddressStreet"
                inicialValue={invoice?.clientAddress.street}
              />
            </GridLocator>
            <GridLocator gridArea="city">
              <LabelForm htmlFor="clientAddressCity" isVisible={true}>
                {t("components.invoiceForm.city")}
              </LabelForm>
              <InputForm
                type="text"
                id="clientAddressCity"
                inicialValue={invoice?.clientAddress.city}
              />
            </GridLocator>
            <GridLocator gridArea="postCode">
              <LabelForm htmlFor="clientAddressPostCode" isVisible={true}>
                {t("components.invoiceForm.postCode")}
              </LabelForm>
              <InputForm
                type="string"
                id="clientAddressPostCode"
                inicialValue={invoice?.clientAddress.postCode}
              />
            </GridLocator>
            <GridLocator gridArea="country">
              <LabelForm htmlFor="clientAddressCountry" isVisible={true}>
                {t("components.invoiceForm.country")}
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
                  {t("components.invoiceForm.invoiceDate")}
                </LabelForm>
                <InputForm
                  type="date"
                  id="createdAt"
                  inicialValue={invoice?.createdAt}
                />
              </S.Wrapper>
              <S.Wrapper>
                <LabelForm htmlFor="paymentTerms" isVisible={true}>
                  {t("components.invoiceForm.paymentTerms")}
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
                {t("components.invoiceForm.projectDescription")}
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
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.ScrollZone>
      <SelectionZone type={type} handleGoBack={handleGoBackClick} />
    </S.Container>
  );
};
