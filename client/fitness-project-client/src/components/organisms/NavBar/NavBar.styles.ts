import styled, { css } from 'styled-components';
import { colors } from '../../../colors';

export const StyledNavBar = styled.nav`
  width: 100vw;
  height: 100px;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus,
  &:hover {
    outline: none;
  }
`;

export const NavBarButtons = styled.div`
  width: 80%;
  display: flex;
  gap: 26px;
  padding: 0 24px;
  justify-content: end;
  align-items: center;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;

export const LogoButton = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 0 24px;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;

export const NavBarText = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: ${colors.grey};
  &:focus {
    font-size: 26px;
    color: ${colors.primary};
    text-decoration-color: ${colors.black};
    font-weight: 700;
  }
`;
