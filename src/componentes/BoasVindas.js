import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
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
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width:130, height:130 }} source={require('./images/plus.png')} />
                    <Text style={{ fontSize: 25, fontFamily: 'arial', color: '#fff' }}>Dê um PLUS na sua vida!</Text>
                </View>
                <View style={{ flex: 3 }}>
                    
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Fazer Login" color='#292b2c' onPress={() => Actions.formLogin() }/>
                </View>
            </LinearGradient>
        );
    }
}

export default (boasVindas);