import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
export default props => (
    <View backgroundColor='#52d3aa' style={{ flex:1, padding:10 }}>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width:130, height:130 }}
          source={require('./images/plus.png')}
        />
        </View>

        <View style={{ flex:2 }}>
            <TextInput style={{ fontSize:20, height: 45 }} placeholder='E-mail' />
            <TextInput style={{ fontSize:20, height: 45 }} placeholder='Senha' />
            <Text style={{ color: '#fff', fontSize:20 }}>Ainda não possui cadastro?</Text>
        </View>

        <View style={{ flex:2 }}>
            <Button title='Entrar' color='#292b2c' onPress={() => false} />
        </View>
    </View>
);