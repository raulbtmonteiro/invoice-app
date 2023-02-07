import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  max-width: 230px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const OptionsWrapper = styled.div`
  width: calc(100vw - 48px);
  max-width: 730px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: flex-end;

  position: absolute;
  top: 84px;
  right: 24px;

  @media screen and (min-width: 481px) {
    top: 111px;
  }

  @media screen and (min-width: 778px) {
    right: calc(50vw - 365px);
  }

  @media screen and (min-width: 992px) {
    top: 125px;
    right: calc((100vw - 103px - 730px) / 2);
  }
`;

export const Options = styled.div`
  position: relative;
  right: 39px;

  background: ${({ theme }) => theme.colors.bodyCards};
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;

  width: 192px;
  height: 128px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  padding: 24px;

  @media screen and (min-width: 481px) {
    right: 99px;
  }
`;

type FilterArrow = {
  isOpen: boolean;
};

export const FilterArrow = styled.img.attrs(
  ({ isOpen }: FilterArrow) => {}
)<FilterArrow>`
  transition: 300ms;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;
