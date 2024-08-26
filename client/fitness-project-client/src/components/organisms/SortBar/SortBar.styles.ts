import styled from 'styled-components';
import { colors } from '../../../colors';
import { mediaQueries } from '../../../consts/mediaQueries';
import { StyledButton } from '../../atoms/Button/Button.styles';

export const SortBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries.desktop} {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const SortBarButton = styled(StyledButton)`
  font-family: 'Open Sans', sans-serif;
  ${mediaQueries.mobile} {
    width: auto;
    height: 26px;
    padding: 0 10px;
  }

  ${mediaQueries.desktop} {
    width: auto;
    min-width: 0;
    height: 26px;
  }
`;

export const SearchIconContainer = styled.div`
  position: sticky;
  right: 0;
  background: linear-gradient(to left, ${colors.white}, transparent);
  padding-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${mediaQueries.desktop} {
    position: sticky;
    right: 0;
    background: none;
    padding-left: 0;
  }
`;
