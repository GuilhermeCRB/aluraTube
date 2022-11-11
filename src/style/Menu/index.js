import styled from 'styled-components';

export const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  background-color: ${({ theme }) => theme.backgroundLevel1 || '#FFFFFF'};
  border: 1px solid ${({ theme }) => theme.borderBase || '#e5e5e5'};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  z-index: 1;
  .logo-div {
    position: absolute;
    left: 15px;
  }
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || '#222222'};
    }
  }
`;
