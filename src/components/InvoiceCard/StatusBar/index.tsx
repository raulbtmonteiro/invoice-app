import { selectStatusColor } from "../../../utils";
import { ThemeContext } from "styled-components";
import { Template } from "../../../themes/types";
import { OptionsBar } from "./OptionsBar";
import { useContext } from "react";
import * as S from "./styles";

interface ISetupBar {
  status: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const StatusBar = ({ status, showModal, setShowModal }: ISetupBar) => {
  const theme: Template = useContext(ThemeContext);

  return (
    <S.StatusContainer>
      <S.StatusWrapper>
        Status
        <S.Status theme={selectStatusColor(theme, status)}>
          <div></div>
          {status}
        </S.Status>
      </S.StatusWrapper>
      <OptionsBar
        status={status}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </S.StatusContainer>
  );
};
