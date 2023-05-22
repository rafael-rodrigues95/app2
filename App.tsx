import React from 'react';
import 'react-native-gesture-handler';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator(); // Usado para a navegação (React Navigation)

function TelaHome({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Home</Text>
      <Text>Algum texto</Text>
      <Button title="Tela Sobre" onPress={() => navigation.navigate('Sobre')} />
    </View>
  );
}

function TelaSobre({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Sobre</Text>
      <Text>Algum texto</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App2() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TelaHome}
          options={{title: 'Tela Canal'}}
        />
        <Stack.Screen
          name="Sobre"
          component={TelaSobre}
          options={{title: 'Tela Sobre'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
