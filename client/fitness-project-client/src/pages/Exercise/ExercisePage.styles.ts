import styled from "styled-components";
import { colors } from "../../colors";
import { mediaQueries } from "../../consts/mediaQueries";

export const PageContainer = styled.div`
  padding: 16px;
  padding-bottom: 76px; // Account for the bottom nav bar on mobile
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${mediaQueries.desktop} {
    padding: 20px;
    padding-top: 120px; // Account for the top nav bar on desktop
  }
`;

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${colors.black};
  position: relative;
  z-index: 1;

  ${mediaQueries.desktop} {
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const ExerciseList = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;

  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const BackgroundImage = styled.div<{ imageUrl: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: -6;
`;
