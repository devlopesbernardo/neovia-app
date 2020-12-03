import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StyledView = styled.View`
  flex: 1;
  background-color: #f9ebc2;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const StyledText = styled.Text`
  font-family: 'Spectral_700Bold';
  font-size: 44px;
  color: black;
  margin-left: 10%;
`;

export const StyledHorizontalFlex = styled.View`
  flex-direction: column;
  width: 90%;
`;

export const Styledinput = styled.TextInput`
  background-color: white;
  margin-top: 5%;
  margin-left: 10%;
  height: 40px;
  padding-left: 10px;
`;

export const StyledButtonFlex = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 20px;
`;
export const Spacer = styled.View`
  width: 22px;
  color: transparent;
`;
