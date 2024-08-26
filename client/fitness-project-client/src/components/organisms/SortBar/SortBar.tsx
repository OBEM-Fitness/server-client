import { colors } from '../../../colors';
import Icon from '../../atoms/Icon/Icon';
import { SortBar, SortBarButton, SearchIconContainer } from './SortBar.styles';

type ButtonConfig = {
  category: string;
  label: string | React.ReactNode;
  icon?: string;
};

interface SortBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  buttonConfigs: ButtonConfig[];
}

const SortBarComponent: React.FC<SortBarProps> = ({ activeCategory, setActiveCategory, buttonConfigs }) => {
  return (
    <SortBar>
      {buttonConfigs.map(({ category, icon, label }) => (
        <SortBarButton
          key={category}
          onClick={() => setActiveCategory(category)}
          size="small"
          type={icon ? 'icon' : undefined}
          $backgroundColor={activeCategory === category ? colors.primary : colors.line}
          color={colors.black}
        >
          {label}
        </SortBarButton>
      ))}
      <SearchIconContainer>
        <Icon iconName="magnifyingGlass" color={colors.black} size={24} />
      </SearchIconContainer>
    </SortBar>
  );
};

export default SortBarComponent;
