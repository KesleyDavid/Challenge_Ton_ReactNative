import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px; 
`;

export const Banner = styled.View`
  /* flex: 1; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 180px;
  background: #00af00;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export const ImageProduct = styled.Image`
  width: 140px;
  height: 180px;
  position: relative;
  top: -30px;
`;

export const Features = styled.View`
  flex-direction: row;
  margin-right: 10px;
`;

export const Feature = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Feature1 = styled(Feature)`
  margin-right: 5px;
`;

export const Feature2 = styled(Feature)`
  position: relative;
  left: -20px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px;

  border-style: solid; 
  border-left-color: #e6e6e6; 
  border-left-width: 1px;
  border-right-color: #e6e6e6; 
  border-right-width: 1px;
  border-bottom-color: #e6e6e6; 
  border-bottom-width: 1px;
`;

export const Informations = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Description = styled.View`
  flex: 1;
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

export const CartAmount = styled.View`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #006300;
  padding: 3px;
  border-radius: 5px;
  margin-right: 5px;
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
  border-radius: 32px;
  height: 56px;
  font-size: 16px;
  width: 100%;
  margin-top: 24px;
  background-color: #009900;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ButtonRemove = styled(BorderlessButton)`
  border: 0px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  height: 56px;
  font-size: 16px;
  width: 100%;
  margin-top: 24px;
  background-color: red;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
`;