import styled, { css } from "styled-components";

export const OptionGroup = styled.div`
  display: flex;

  cursor: pointer;
  :hover {
    div {
      border: 1px solid ${({ theme }) => theme.colors.logoBackground};
    }
  }
`;

type SelectionBox = {
  isSelected: boolean;
};

export const SelectionBox = styled.div.attrs(
  ({ isSelected }: SelectionBox) => {}
)<SelectionBox>`
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.body};

  img {
    display: none;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.logoBackground};

      img {
        display: block;
      }
    `}
`;
