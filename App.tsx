import React from 'react';
import 'react-native-gesture-handler';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator(); // Usado para a navegação (React Navigation)
const Tabs = createBottomTabNavigator(); // Usado para a navegação (Por guias)

function TelaHome({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Home</Text>
      <Text>Algum texto</Text>
      <Button title="Tela Sobre" onPress={() => navigation.navigate('Sobre')} />
      <Button
        title="Tela Cursos"
        onPress={() => navigation.navigate('TelaCursos')}
      />
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

function TelaCursos({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Cursos</Text>
      <Text>Algum texto</Text>
      <Button
        title="React Native"
        onPress={() =>
          navigation.navigate('CursoReactNative', {
            aulas: 100,
            autor: 'Bruno',
          })
        }
      />
    </View>
  );
}

function TelaCursoReactNative({route, navigation}) {
  const aulas = route.params.aulas;
  const {autor} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Curso de React Native</Text>
      <Text>Aulas: {aulas}</Text>
      <Text>Autor: {autor}</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Voltar para cursos" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App2() {
  return (
    <NavigationContainer>
      {/*
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TelaHome}
          options={{
            title: 'Tela Home',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            title: 'Sobre',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Button
                title="Cursos"
                color="#000"
                onPress={() => alert('Botão Cursos Clicado')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="TelaCursos"
          component={TelaCursos}
          options={{
            title: 'Cursos',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="CursoReactNative"
          component={TelaCursoReactNative}
          options={{
            title: 'Curso de React Native',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
*/}

      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={TelaHome}
          options={{
            title: 'Tela Home',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
          }}
        />
        <Tabs.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            title: 'Sobre',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Button
                title="Cursos"
                color="#000"
                onPress={() => alert('Botão Cursos Clicado')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="TelaCursos"
          component={TelaCursos}
          options={{
            title: 'Cursos',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
          }}
        />
        <Tabs.Screen
          name="CursoReactNative"
          component={TelaCursoReactNative}
          options={{
            title: 'Curso de React Native',
            headerStyle: {
              backgroundColor: '#005',
            },
            headerTintColor: '#fff',
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
