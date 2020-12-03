import React from 'react';
import { View, Text } from 'react-native';
import { Spacer, StyledButtonFlex, StyledText } from '../Main/styles';
import { StyledView } from './styles';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';

export default function Home() {
  return (
    <StyledView>
      <Animatable.View animation="slideInDown" easing="ease-out" duration={800}>
        <StyledText style={{ fontFamily: 'Spectral_300Light_Italic' }}>
          O que quer
        </StyledText>
        <StyledText>Fazer?</StyledText>
      </Animatable.View>
      <StyledButtonFlex>
        <Animatable.View delay={100} animation="slideInLeft" duration={700}>
          <Button
            title="Enviar"
            buttonStyle={{
              backgroundColor: '#faae43',
              width: 130,
            }}
            type="solid"
            raised
            titleStyle={{ fontFamily: 'Spectral_500Medium', color: 'black' }}
            onPress={() => navigation.navigate('Home')}
          />
        </Animatable.View>

        <Spacer />
        <Animatable.View delay={100} animation="slideInRight" duration={700}>
          <Button
            title="Checar envios"
            buttonStyle={{
              backgroundColor: '#AFDED9',
              width: 130,
              alignSelf: 'flex-end',
            }}
            type="solid"
            raised
            titleStyle={{ fontFamily: 'Spectral_500Medium', color: 'black' }}
          />
        </Animatable.View>
      </StyledButtonFlex>
    </StyledView>
  );
}
