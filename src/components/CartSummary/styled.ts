import styled from 'styled-components/native';

interface ContainerProps {
  isVisibled: boolean;
}
export const Container = styled.View`
  display: ${({isVisibled}:ContainerProps) => isVisibled ? 'flex' : 'none'};;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 180px;
  background: #ebfff3;

`;

export const View = styled.View`
  //
`;

export const Text = styled.Text`
  font-size: 25px;
`;

export const Value = styled.Text`
  font-size: 35px;
  color: #006300;
  font-weight: 700;
`;


