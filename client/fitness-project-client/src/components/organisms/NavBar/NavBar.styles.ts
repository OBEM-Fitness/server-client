import styled from "styled-components";
import { colors } from "../../../colors";
import { mediaQueries } from "../../../consts/mediaQueries";

export const StyledNavBar = styled.nav`
  display: none;

  ${mediaQueries.desktop} {
    display: flex;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: ${colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 40px;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;
export const NavBarButtons = styled.div`
  display: flex;
  gap: 26px;
  align-items: center;
`;

export const LogoButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const NavBarText = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: ${colors.grey};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const MobileNavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);

  ${mediaQueries.desktop} {
    display: none;
  }
`;

interface MobileNavItemProps {
  $active: boolean;
}

export const MobileNavItem = styled.div<MobileNavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  color: ${(props) => (props.$active ? colors.primary : colors.grey)};
  position: relative;

  span {
    font-size: 12px;
    margin-top: 4px;
  }

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${(props) =>
      props.$active ? colors.primary : "transparent"};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: background-color 0.3s ease;
  }
`;

export const NavBarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBarLabel = styled.span`
  font-size: 12px;
  margin-top: 4px;
  text-align: center;
`;
