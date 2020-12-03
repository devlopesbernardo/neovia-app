import React from 'react';
import {
  useFonts,
  Spectral_700Bold,
  Spectral_500Medium,
  Spectral_300Light_Italic,
} from '@expo-google-fonts/spectral';
import { Button } from 'react-native-elements';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import {
  Styledbutton,
  StyledButtonFlex,
  StyledHorizontalFlex,
  Styledinput,
  StyledText,
  StyledView,
  Spacer,
} from './styles';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

export default function Main({ navigation }) {
  const [value, setValue] = React.useState('');
  const onChangeText = (text) => {
    setValue(text);
    console.log(value);
  };
  let [fontsLoaded] = useFonts({
    Spectral_700Bold,
    Spectral_500Medium,
    Spectral_300Light_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyledView>
        <StyledText style={{ fontFamily: 'Spectral_300Light_Italic' }}>
          Entre com seu
        </StyledText>
        <StyledText>Login</StyledText>
        <StyledHorizontalFlex>
          <Styledinput
            placeholder="Login"
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
          <Styledinput
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </StyledHorizontalFlex>
        <StyledButtonFlex>
          <Button
            title="Entrar"
            buttonStyle={{
              backgroundColor: '#faae43',
              width: 130,
            }}
            type="solid"
            raised
            titleStyle={{ fontFamily: 'Spectral_500Medium', color: 'black' }}
            onPress={() => navigation.navigate('Home')}
          />
          <Spacer />
          <Button
            title="Cadastre-se"
            buttonStyle={{
              backgroundColor: '#AFDED9',
              width: 130,

              alignSelf: 'flex-end',
            }}
            type="solid"
            raised
            titleStyle={{ fontFamily: 'Spectral_500Medium', color: 'black' }}
          />
        </StyledButtonFlex>
        <StatusBar style="auto" />
      </StyledView>
    );
  }
}
