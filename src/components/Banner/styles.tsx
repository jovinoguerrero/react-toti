import { Container, Typography } from "@material-ui/core";
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  padding: 0;
  max-width: inherit;
`;

export const Banner = styled(Typography)`
  background-color: #2d0f1b;
  height: 60vh;
  margin: 1rem 2rem;
  display: flex;
  flex-direction: row;
  boxShadow: rgba(0,0,0,0.8) 0 0 10px;
`;

export const BannerTitleText = styled(Typography)`
  margint-top: 2rem;
  padding: 2rem;
`;

export const BannerSubTitleText = styled(Typography)`
  margint-left: 1.5rem;
  margin-top: 7rem;
`;

export const Image = styled.img`
  padding: 2rem;
  border-radius: 100px 50px 50px 100px;
`;
