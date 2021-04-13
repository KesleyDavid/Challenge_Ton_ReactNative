import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px; 
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px;

  border-style: solid; 
  border-color: #e6e6e6; 
  border-width: 1px;
  border-radius: 5px;
`;

export const Informations = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Actions = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.View`
  /* flex: 1; */
`;

export const Description = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ImageProduct = styled.Image`
  width: 35px;
  height: 45px;
`;

export const DividedPrice = styled.View`
  max-height: 64px;
  flex-direction: row;
  margin-left: auto;
  margin-top: auto;
  display: flex;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #00c700;
`;

export const Label = styled.Text`
  font-size: 16px;
`;

export const LabelBold = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const TitlePrice = styled.Text`
  font-size: 60px;
  font-weight: 700;
  color: #000000;
`;

export const LabelPrice = styled.Text`
  font-size: 16px;
  font-weight: 700;
  align-self: flex-end;
`;

export const LabelPriceCents = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
`;

export const CartText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

interface ButtonProps {
  cartAmount?: boolean;
}
export const Button = styled(BorderlessButton)`
  display: flex;
  flex-direction: row;
  border: 0px;
  align-items: center;
  justify-content: ${({cartAmount}:ButtonProps) => cartAmount ? 'space-evenly' : 'center'};
  border-radius: 5px;
  height: 56px;
  width: 56px;
  font-size: 16px;
  margin-top: 24px;
  background-color: #009900;
`;

interface ButtonRemoveProps {
  disabled?: boolean;
}
export const ButtonRemove = styled(BorderlessButton)`
  border: 0px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 56px;
  width: 56px;
  font-size: 16px;
  margin-top: 24px;
  background-color: ${({disabled}:ButtonRemoveProps) => disabled ? '#a9a9a9' : 'red'};;
  
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
`;