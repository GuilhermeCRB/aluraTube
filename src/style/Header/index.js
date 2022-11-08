import styled from 'styled-components';

export const StyledHeader = styled.div`
  overflow: hidden;
  .profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 56px;
  background-image: ${({ picture }) => `url(${picture})`};
  background-size: cover;
`;
