import plus from "../../assets/icon-plus.svg";
import {
  DisplayContainer,
  DisplayInfo,
  DisplayInfoAmount,
  DisplayInfoFilter,
  DisplayInfoNew,
  DisplayInfoNewButtom,
  DisplayInfoTitle,
  FlexLeft,
  FlexRight,
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
          <DisplayInfoFilter name="status">
            <option value="">Filter</option>
            <option value="Draft">Draft</option>
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </DisplayInfoFilter>

          <DisplayInfoNew>
            <DisplayInfoNewButtom>
              <img src={plus} />
            </DisplayInfoNewButtom>
            New
          </DisplayInfoNew>
        </FlexRight>
      </DisplayInfo>
    </DisplayContainer>
  );
};
