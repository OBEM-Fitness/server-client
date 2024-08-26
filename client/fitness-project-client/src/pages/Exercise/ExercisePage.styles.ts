import styled from 'styled-components';
import { colors } from '../../colors';
import { mediaQueries } from '../../consts/mediaQueries';
export const PageContainer = styled.div`
  padding: 16px;
  height: 100vh;

  ${mediaQueries.desktop} {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${colors.black};

  ${mediaQueries.desktop} {
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const ExerciseList = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
