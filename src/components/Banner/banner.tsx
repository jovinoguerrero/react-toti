import React, { useEffect } from 'react';
import imagem from '../../assets/eu-tartaruga.jpeg';
import * as S from './styles';

export default function Banner() {
  const texto: string = "Olá, Sou Jovino Guerrero";
  const [primeiroTexto, setPrimeiroTexto] = React.useState("");
  const [segundoTexto, setSegundoTexto] = React.useState("");
  let index: number = 1;

  const processText = () => {
    if (index <= 5) {
      setPrimeiroTexto(texto.substring(0, index));
      index = index + 1;
    } else if (index <= texto.length) {
      setSegundoTexto(texto.substring(5, index));
      index = index + 1;
    }
  }

  useEffect(() => {
    setInterval(processText, 150);
  },[]);

  return(
    <div style={{backgroundColor:'#201118', padding: '1rem 0'}}>
      <S.StyledContainer>
        <S.Banner component="div">
          <S.Image alt="Foto perfil" src={imagem} width="200vw"></S.Image>
          <S.BannerTitleText variant="h2" color="secondary">
            {primeiroTexto}
          </S.BannerTitleText>
          <S.BannerSubTitleText variant="h2" color="secondary">
            {segundoTexto}
          </S.BannerSubTitleText>
        </S.Banner>
      </S.StyledContainer>
    </div>
  )
}
