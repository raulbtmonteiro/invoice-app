import styled from "styled-components";

export const Button = styled.button`
  padding: 17px 20px;
  background: ${({ color }) => color};
  border: none;
  border-radius: 24px;
  max-height: 48px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => disabled && 0.3};
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.textButtom};
`;
