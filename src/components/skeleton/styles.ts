import styled, { keyframes, css } from 'styled-components'

interface TeamAnimationProps {
  themeState: string;
}

const skeleton = keyframes`
  0% {
    background-color: #EEF9FF;
  }
  100% {
    background-color: #C5E9FD;
  }
`;

const skeletonDark = keyframes`
  0% {
    background-color: #002436;
  }
  100% {
    background-color: #013752;
  }
`;


const skeletonSVG = keyframes`
  0% {
    fill: #EEF9FF;
  }
  100% {
    fill: #C5E9FD;
  }
`;

const skeletonSVGDark = keyframes`
  0% {
    fill: #002436;
  }
  100% {
    fill: #013752;
  }
`;


export const Team = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  display: grid;
  grid-template-rows: 20px 1fr 70px;
`;

export const TeamTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TeamLocality = styled.p<TeamAnimationProps>`
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 30px;
  height: 10px;
  border-radius: 2px;
  animation: ${({ themeState }) =>
    css`
      ${themeState === 'dark'
        ? skeletonDark
        : skeleton} 1s linear infinite alternate
    `}; ;
`;

export const TeamMain = styled.div`
  margin: auto;
`;


export const TeamLogo = styled.div`
  margin-bottom: 1rem;
`;

export const TeamLogoSVG = styled.svg`
  width: 65px;
  height: 65px;
`;

export const TeamLogoPath = styled.path<TeamAnimationProps>`
  animation: ${({ themeState }) =>
    css`
      ${themeState === 'dark'
        ? skeletonSVGDark
        : skeletonSVG} 1s linear infinite alternate
    `};
`;


export const TeamName = styled.div<TeamAnimationProps>`
  width: 65px;
  height: 12px;
  margin: 0;
  border-radius: 2px;
  animation: ${({ themeState }) =>
    css`
      ${themeState === 'dark'
        ? skeletonDark
        : skeleton} 1s linear infinite alternate
    `}; ;
`;

export const TeamStatistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TeamStatisticsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TeamStatisticsLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.cardText};
  margin-bottom: 0.5rem;
  display: block;
  text-transform: uppercase;
`;

export const TeamStatisticsNumber = styled.p<TeamAnimationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.cardText};
  border-radius: 4px;
  padding: 0.6rem;
  width: 20px;
  height: 20px;
  animation: ${({ themeState }) =>
    css`
      ${themeState === 'dark' ? skeletonDark : skeleton} 1s linear infinite alternate
    `}; ;
`;
