import styled from 'styled-components';

export const StyledIcon = styled.svg`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  path {
    fill: ${({ color }) => color};
  }
`;