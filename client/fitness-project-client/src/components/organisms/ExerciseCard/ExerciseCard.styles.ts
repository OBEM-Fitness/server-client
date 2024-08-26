import styled from 'styled-components';
import { colors } from '../../../colors';
import { mediaQueries } from '../../../consts/mediaQueries';

export const ExerciseItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 16px 0px;
  margin: 0;
  border: 1px solid ${colors.line};
  border-radius: 10px;
  position: relative;

  ${mediaQueries.desktop} {
    flex-direction: column;
    background-color: ${colors.white};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }
  ${mediaQueries.mobile} {
    padding: 0;
  }
`;

export const ExerciseImage = styled.img`
  width: 85px;
  height: 109px;
  border-radius: 10px 0 0 10px;
  margin-right: 16px;

  ${mediaQueries.desktop} {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
    margin-right: 0;
  }

  ${mediaQueries.mobile} {
    height: auto;
  }
`;

export const ExerciseInfo = styled.div`
  flex-grow: 1;

  ${mediaQueries.desktop} {
    padding: 15px;
  }
`;

export const ExerciseName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.black};
  margin-bottom: 4px;

  ${mediaQueries.desktop} {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const ExerciseDescription = styled.p`
  font-size: 14px;
  color: ${colors.blackBodyText};

  ${mediaQueries.desktop} {
    margin-bottom: 10px;
  }
  ${mediaQueries.mobile} {
    font-size: 12px;
  }
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  cursor: pointer;

  ${mediaQueries.mobile} {
    top: 8px;
    right: 8px;
  }

  ${mediaQueries.desktop} {
    bottom: 8px;
    left: 8px;
    width: 15px;
    height: 20px;
  }
`;
