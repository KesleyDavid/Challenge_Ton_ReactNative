import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useCategory } from '../../hooks/useCategory';

import * as S from './styled';

export default function CategoryTab() {

  const { isSelectedMega, setSelectedMega } = useCategory();

  function handleFilterBasic() {
    setSelectedMega(false);
  }

  function handleFilterMega() {
    setSelectedMega(true);
  }

  return (
    <S.Container>
      <ThemeProvider theme={{ isSelectedMega: !isSelectedMega }}>
        <S.PanelLeft>
          <S.Button onPress={ handleFilterBasic }>
            <S.Title>Ton Básico</S.Title>
            <S.Content>Quero as maquininhas{"\n"}mais baratas</S.Content>
          </S.Button>
        </S.PanelLeft>
      </ThemeProvider>
      <ThemeProvider theme={{ isSelectedMega }}>
        <S.PanelRight>
          <S.Button onPress={ handleFilterMega }>
            <S.Title>Mega Ton</S.Title>
            <S.Content>Quero as{"\n"}menores taxas</S.Content>
          </S.Button>
        </S.PanelRight>
      </ThemeProvider>
    </S.Container>
  )
}
