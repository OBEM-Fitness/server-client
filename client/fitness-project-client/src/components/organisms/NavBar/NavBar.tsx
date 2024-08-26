import { StyledNavBar, NavBarButtons, LogoButton, NavBarText } from './NavBar.styles';
import Link from '../../atoms/Link/Link';
import Icon from '../../atoms/Icon/Icon';
import { useState } from 'react';
import { colors } from '../../../colors';

const NavBar: React.FC = () => {
  const [category, setCategory] = useState('isActive');
  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };
  const getNavBarButtonColor = (buttonCategory: string) => {
    const buttonColor = buttonCategory === 'home' || buttonCategory === 'exercise' ? colors.primary : colors.grey;

    return { color: buttonColor };
  };
  const getNavBarButtonsColor = (category: string) => {
    if (category === 'home' || category === 'exercise' || category === 'progress' || category === 'settings') {
      return {
        color: colors.primary,
      };
    } else {
      return {
        color: colors.grey,
      };
    }
  };
  return (
    <StyledNavBar>
      <LogoButton onClick={() => handleCategoryClick('home')} style={getNavBarButtonsColor('home')}>
        <Icon iconName="crown" size={36} color={colors.black} />
        <NavBarText>BIOM Fitness Inc.</NavBarText>
      </LogoButton>
      <NavBarButtons>
        {['home', 'exercise'].map((buttonName) => (
          <Link
            key={buttonName}
            to={`/${buttonName}`}
            onClick={() => handleCategoryClick(buttonName)}
            style={getNavBarButtonsColor(buttonName)}
          >
            <Icon iconName={buttonName === 'home' ? 'home' : 'dumbBell'} size={36} />
            <NavBarText>{buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}</NavBarText>
          </Link>
        ))}
      </NavBarButtons>
    </StyledNavBar>
  );
};

NavBar.displayName = 'NavBar';

export default NavBar;
