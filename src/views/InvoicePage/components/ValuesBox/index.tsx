import { formatCurrency } from "../../../../utils";
import { Invoice } from "../../../types";
import * as S from "./styles";

import { useTranslation } from "react-i18next";

interface IValuesBox {
  invoice: Invoice;
}

export const ValuesBox = ({ invoice }: IValuesBox) => {
  const { t } = useTranslation() 

  return (
    <S.ValuesContainer>
      <S.ValuesDescriptionContainer>
        <S.Table>
          <div>{t("invoicePage.valuesBox.itemName")}</div>
          <div>{t("invoicePage.valuesBox.qty")}</div>
          <div>{t("invoicePage.valuesBox.price")}</div>
          <div>{t("invoicePage.valuesBox.total")}</div>
        </S.Table>
        {invoice?.items.map((item) => {
          return (
            <S.ValueDescription key={Math.random()}>
              <div>
                <S.DescriptionName>{item.name}</S.DescriptionName>
                <S.DescriptionPriceMobile>
                  {item.quantity} x {formatCurrency(item.price)}
                </S.DescriptionPriceMobile>
              </div>
              <S.DescriptionQuantity>{item.quantity}</S.DescriptionQuantity>
              <S.DescriptionPrice>
                {formatCurrency(item.price)}
              </S.DescriptionPrice>
              <S.TotalPrice>{formatCurrency(item.total)}</S.TotalPrice>
            </S.ValueDescription>
          );
        })}
      </S.ValuesDescriptionContainer>
      <S.TotalContainer>
        <S.TotalText>{t("invoicePage.valuesBox.grandTotal")}</S.TotalText>
        <S.Total>{formatCurrency(invoice.total)}</S.Total>
      </S.TotalContainer>
    </S.ValuesContainer>
  );
};
