import { Invoice } from "../../InvoiceDisplay/types";
import { formatCurrency } from "../../../utils";
import * as S from './styles';

interface IValuesBox {
  invoice: Invoice;
}

export const ValuesBox = ({invoice}: IValuesBox) => {
  return (
    <S.ValuesContainer>
      <S.ValuesDescriptionContainer>
        <S.Table>
          <div>Item Name</div>
          <div>QTY.</div>
          <div>Price</div>
          <div>Total</div>
        </S.Table>
        {invoice?.items.map((item) => {
          return (  
            <S.ValueDescription>
              <div>
                <S.DescriptionName>{item.name}</S.DescriptionName>
                <S.DescriptionPriceMobile>{item.quantity} x {formatCurrency(item.price)}</S.DescriptionPriceMobile>
              </div>
              <S.DescriptionQuantity>{item.quantity}</S.DescriptionQuantity>
              <S.DescriptionPrice>{formatCurrency(item.price)}</S.DescriptionPrice>
              <S.TotalPrice>{formatCurrency(item.total)}</S.TotalPrice>
            </S.ValueDescription>
          );
        })}
      </S.ValuesDescriptionContainer>
      <S.TotalContainer>
        <S.TotalText>Grand Total</S.TotalText>
        <S.Total>{formatCurrency(invoice.total)}</S.Total>
      </S.TotalContainer>
    </S.ValuesContainer>
  );
};
