import styled from 'styled-components';

export const OptionsBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 21px 24px;
  background-color: ${({theme}) => theme.colors.bodyCards};

  @media screen and (min-width: 481px) {
    display: none;
  }
`;