import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
  background-color: #02c701;
  border-bottom-width: 1px;
  border-color: #02c701;
  padding-top: 40px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  color: #8fa7b3;
  font-size: 16px;
`;

export const View = styled.View`
  width: 30px;
`;

export const Logo = styled.Image`
  width: 49px;
  height: 35px;
`;

export const Button = styled(BorderlessButton)`
  width: 100%;
  height: 100%;
`;