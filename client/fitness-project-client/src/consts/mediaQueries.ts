import { css } from 'styled-components';

export const breakpoints = {
  desktop: 768,
};

export const mediaQueries = {
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  mobile: `@media (max-width: ${breakpoints.desktop - 1}px)`,
};

export const mobileOnly = css`
  ${mediaQueries.desktop} {
    display: none;
  }
`;

export const desktopOnly = css`
  ${mediaQueries.mobile} {
    display: none;
  }
`;
