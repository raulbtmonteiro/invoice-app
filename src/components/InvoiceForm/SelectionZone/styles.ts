import styled from "styled-components";

export const Container = styled.div<{ type: string }>`
  width: 100%;
  height: 110px;
  background: #ffffff;
  box-shadow: 0px -20px 20px -10px rgba(72, 84, 159, 0.100397);
  display: flex;
  justify-content: ${({ type }) =>
    type === "new" ? "space-between" : "flex-end"};
  align-items: center;
  padding: 0 24px;

  @media screen and (min-width: 481px) {
    border-radius: 0px 20px 20px 0px;
    padding: 0 56px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
