import React from "react";
import {View, Text, Button} from "react-native"

export default function TelaSobre({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tela Sobre</Text>
        <Text>Algum texto</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }