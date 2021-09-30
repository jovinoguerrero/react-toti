import styled from 'styled-components';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '@material-ui/core';

export const Title =  styled(Typography)`
  font-weight: bold;
  text-align: center;
  padding-top: 1rem;
  color: #ffffff
`;

export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  background-color: #1c2a35;
  border-radius: 5px;
  box-shadow: rgba(0,0,0,0.8) 0 0 10px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 500px;
  padding-inline-start: 0;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  list-style: none;
`;

export const Carousel = styled.div`
  background: #fff;
  border: 2px solid #c058dc;
  border-radius: 5px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;

  position: relative;
`;

export const Slider = styled.div`
  display: flex;
  height: 100%;
  width: 500%;
  flex-shrink: 0;
  transition: all 0.5s;
`;

export const Item = styled.div`
  flex-basis: 20%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const Controls = styled.div`
  
`;

export const ButtonPrev = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: #c058dc;
`;

export const ButtonNext = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: #c058dc;
`;

