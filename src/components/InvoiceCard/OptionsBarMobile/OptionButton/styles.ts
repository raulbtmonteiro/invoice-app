import styled from 'styled-components';

export const Button = styled.button`
  padding: 17px 24px;
  background: ${({ color }) => color};
  border: none;
  border-radius: 24px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.textButtom} ;
`;