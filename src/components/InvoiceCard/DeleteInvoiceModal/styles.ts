import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.416667px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textDescription};
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.25px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 89px;
  border: none;
  border-radius: 24px;
  color: ${({ color, theme }) =>
    color === "#EC5757" ? "#FFF" : theme.colors.textHighlight};
  background-color: ${({ color }) => color};
  cursor: pointer;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
`;
