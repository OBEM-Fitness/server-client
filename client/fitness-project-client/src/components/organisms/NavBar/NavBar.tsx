import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledNavBar,
  NavBarContent,
  LogoSection,
  NavBarButtons,
  LogoButton,
  NavBarText,
  MobileNavBar,
  MobileNavItem,
  NavBarIcon,
  NavBarLabel,
  Logo,
} from "./NavBar.styles";
import Icon from "../../atoms/Icon/Icon";
import { colors } from "../../../colors";
import Logoimage from "../../../assets/logo.png";

type IconNames = "home" | "dumbBell" | "chart" | "settings" | "crown";

interface NavItem {
  path: string;
  iconName: IconNames;
  label: string;
}

const NavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  const getNavBarButtonColor = (path: string) => {
    return isActive(path) ? colors.primary : colors.grey;
  };

  const navItems: NavItem[] = [
    { path: "/", iconName: "home", label: "Home" },
    { path: "/exercises", iconName: "dumbBell", label: "Workout" },
    { path: "/progress", iconName: "chart", label: "Progress" },
    { path: "/settings", iconName: "settings", label: "Settings" },
  ];

  const renderDesktopNav = () => (
    <StyledNavBar>
      <NavBarContent>
        <LogoSection>
          <LogoButton
            onClick={() => handleNavigation("/")}
            style={{ color: colors.black }}
          >
            <Logo>
              <img src={Logoimage} alt="OB Fitness Inc. Logo" />
            </Logo>
            <NavBarText>OB Fitness Inc.</NavBarText>
          </LogoButton>
        </LogoSection>
        <NavBarButtons>
          {navItems.slice(0, 2).map((item) => (
            <NavBarText
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              style={{ color: getNavBarButtonColor(item.path) }}
            >
              <Icon
                iconName={item.iconName}
                size={24}
                color={getNavBarButtonColor(item.path)}
              />
              {item.label}
            </NavBarText>
          ))}
        </NavBarButtons>
      </NavBarContent>
    </StyledNavBar>
  );

  const renderMobileNav = () => (
    <MobileNavBar>
      {navItems.map((item) => (
        <MobileNavItem
          key={item.path}
          $active={isActive(item.path)}
          onClick={() => handleNavigation(item.path)}
        >
          <NavBarIcon>
            <Icon
              iconName={item.iconName}
              size={24}
              color={isActive(item.path) ? colors.primary : colors.grey}
            />
          </NavBarIcon>
          <NavBarLabel>{item.label}</NavBarLabel>
        </MobileNavItem>
      ))}
    </MobileNavBar>
  );

  return (
    <>
      {renderDesktopNav()}
      {renderMobileNav()}
    </>
  );
};

export default NavBar;
