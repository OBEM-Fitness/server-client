import styled from 'styled-components';

export const WelcomePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  display: flex;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(30%);
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
