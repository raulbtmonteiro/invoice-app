import styled from "styled-components";

export const Button = styled.button<{
  backgroundColor: string;
  textColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  padding: 16px 24px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  height: 48px;

  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;
`;
