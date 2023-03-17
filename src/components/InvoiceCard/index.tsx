import invoicesData from "../InvoiceDisplay/data.json";
import * as S from './styles';

interface IInvoiceCard {
  id: string | undefined;
}

export const InvoiceCard = ({id}: IInvoiceCard) => {
  const invoice = invoicesData.find((invoice) => invoice.id === id);

  return (
    <>
    </>
  );
};
