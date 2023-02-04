import plus from "../../assets/icon-plus.svg";
import invoicesData from "./data.json";
import emailCard from "../../assets/email_campaign_Flatline.svg";
import { Filter } from "./Filter";
import { InvoiceItem } from "./InvoiceItem";
import {
  DisplayContainer,
  DisplayInfo,
  DisplayInfoAmount,
  DisplayInfoTitle,
  EmptyDescription,
  EmptyDisplay,
  EmptyTitle,
  FlexLeft,
  FlexRight,
  HiddenText,
  InvoicesContainer,
  NewInvoiceButtom,
  PlusImage,
} from "./styles";

export const InvoiceDisplay = () => {
  return (
    <DisplayContainer>
      <DisplayInfo>
        <FlexLeft>
          <DisplayInfoTitle>Invoices</DisplayInfoTitle>
          <DisplayInfoAmount>7 invoices</DisplayInfoAmount>
        </FlexLeft>

        <FlexRight>
          <Filter />

          <NewInvoiceButtom>
            <PlusImage>
              <img src={plus} />
            </PlusImage>
            <p>
              New <HiddenText>Invoices</HiddenText>
            </p>
          </NewInvoiceButtom>
        </FlexRight>
      </DisplayInfo>

      <InvoicesContainer>
        {invoicesData.length > 0 ? (
          invoicesData.map((invoice: Invoice) => (
            <InvoiceItem invoice={invoice} />
          ))
        ) : (
          <EmptyDisplay>
            <img src={emailCard} />
            <EmptyTitle>There is nothing here</EmptyTitle>
            <EmptyDescription>
              Create an invoice by clicking the
              <b> New Invoice</b> button and get started
            </EmptyDescription>
          </EmptyDisplay>
        )}
      </InvoicesContainer>
    </DisplayContainer>
  );
};
