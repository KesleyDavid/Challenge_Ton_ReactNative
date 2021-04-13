import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface ThemeProps {
  theme: {
    isSelectedMega: boolean;
  }
}

export const Container = styled.View`
  flex-direction: row;
  height: 105px;
  background: black;
`;

export const Panel = styled.View`
  width: 50%;
`;

export const PanelLeft = styled(Panel)`
  background: ${(props:ThemeProps) => props.theme.isSelectedMega ? 'white' : 'black'};
  border-top-right-radius: ${(props:ThemeProps) => props.theme.isSelectedMega ? '24px' : '0px'};
`;

export const PanelRight = styled(Panel)`
  background: ${(props:ThemeProps) => props.theme.isSelectedMega ? 'white' : 'black'};
  border-top-left-radius: ${(props:ThemeProps) => props.theme.isSelectedMega ? '24px' : '0px'};
`;

export const Button = styled(BorderlessButton)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${(props:ThemeProps) => props.theme.isSelectedMega ? 'black' : 'white'};
`;

export const Content = styled.Text`
  font-size: 14px;
  /* width: 100%; */
  text-align: center;
  color: ${(props:ThemeProps) => props.theme.isSelectedMega ? 'black' : 'white'};
`;