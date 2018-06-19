import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      padding: 10,
    },
  });

export default class DrawerMenu extends Component {

  render() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>Configurações</Text>
            <TouchableHighlight onPress={() => Actions.formLogin() } underlayColor="transparent">
                <Text style={styles.text}>Sair</Text>
            </TouchableHighlight>
        </View>
    );
  }
}