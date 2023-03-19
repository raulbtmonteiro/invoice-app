import Modal from "react-modal";
import { Template } from "../../../themes/types";
import * as S from "./styles";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";

interface IDeleteInvoiceModal {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  id: string;
}

export const DeleteInvoiceModal = ({
  showModal,
  setShowModal,
  id,
}: IDeleteInvoiceModal) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width < 481);
  const theme: Template = useContext(ThemeContext);
  const maxWidth = isMobile ? "327px" : "480px";
  const padding = isMobile ? "32px" : "48px";

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(12,14,22,0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      border: "none",
      backgroundColor: theme.colors.bodyCards,
      padding: padding,
      maxWidth: maxWidth,
      margin: "0 auto",
      width: "100%",
    },
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    setIsMobile(width < 481);
  }, [width]);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Modal isOpen={showModal} style={customStyles}>
      <S.Title>Confirm Deletion</S.Title>
      <S.Description>
        Are you sure you want to delete invoice #{id}? This action cannot be
        undone.
      </S.Description>
      <S.ButtonsContainer>
        <S.Button
          color={theme.colors.valuesDescriptionContainer}
          onClick={() => closeModal()}
        >
          Cancel
        </S.Button>
        <S.Button color="#EC5757">Delete</S.Button>
      </S.ButtonsContainer>
    </Modal>
  );
};
