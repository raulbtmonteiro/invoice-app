import { Invoice } from '../../InvoiceDisplay/types';
import { selectStatusColor } from '../../../utils';
import { ThemeContext } from "styled-components";
import { Template } from "../../../themes/types";
import { useContext } from "react";
import * as S from './styles';

interface ISetupBar {
  invoice: Invoice;
}

export const StatusBar = ({invoice}: ISetupBar) => {
  const theme: Template = useContext(ThemeContext);

  return (
    <S.StatusContainer>
      Status
      <S.Status theme={selectStatusColor(theme, invoice.status)}>
        <div></div>
        {invoice.status}
      </S.Status>
    </S.StatusContainer>
  )
};