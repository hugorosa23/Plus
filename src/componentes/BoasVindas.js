import React, { Component } from 'react';
import { View, Text, Button, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

class boasVindas extends Component {
    static navigationOptions = {
        header: null
      };
      render() {
        return (
            <LinearGradient 
                start={{x: 0.0, y: 0.25}} end={{x: 0.4, y: 1.0}}
                locations={[0.1,1.0,0.60]}
                colors={['#3f95ea', '#5cddb4', '#52d3aa']}
                style={{ flex: 1, padding:15 }}>

                <StatusBar backgroundColor="#212324" />

                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width:130, height:130 }} source={require('./images/plus.png')} />
                    <Text style={{ fontSize: 30, color: '#fff' }}>Seja bem vindo!</Text>
                </View>

                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Não será dificil perceber que</Text>
                    <Text style={{ fontSize: 20, color: '#fff' }}>nós tornamos sua vida mais</Text>
                    <Text style={{ fontSize: 20, color: '#fff' }}>fácil a cada dia.</Text>
                    <Text style={{ fontSize: 25, color: '#fff' }}>Dê um PLUS na sua vida!</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Button title="Fazer Login" color='#292b2c' onPress={() => Actions.formLogin() }/>
                </View>
            </LinearGradient>
        );
    }
}

export default (boasVindas);