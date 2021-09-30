import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Divider = styled.hr`
  border-width: 0;
  margin: 0;
  height: 2px;
  background-color: #1f1f1f;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  background-color: #1c2a35;
  border-radius: 5px;
  box-shadow: rgba(0,0,0,0.8) 0 0 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
`;

export const FirstTextSection = styled(Typography)`
  margin: 3.5rem 2rem 0.5rem;
  font-weight: bold;
  color: #87c5f4;
`;

export const SecondtTextSection = styled(Typography)`
  margin: 0.5rem 2rem 3.5rem 6rem;
  font-weight: bold;
  color: #3775a4;
`;

export const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
`;

export const Skill = styled.div`
  font-weight: bold;
  margin: auto;
  width: 100px;
  color: #ffffff;
  :hover {
    color: #87c5f4;
    text-shadow: #87c5f4 0 0 10px;
  }
`;

export const BackgroundBox = styled.div`
  margin: 3px 16px;
  width: 100%;
  height: 1rem;
  background-color: lightgray;
  border-radius: 25px;
  :hover {
    box-shadow: #87c5f4 0 0 10px;
  }
`;

export const HatchedBox = styled.div`
  height: inherit;
  border-radius: 25px 0 0 25px;
`;
