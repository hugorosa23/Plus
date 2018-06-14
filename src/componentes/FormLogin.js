import React from 'react';
import { View, Text, Image, TextInput, Button, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';


const formLogin = props => {
    console.log(props);
    return (
        <LinearGradient 
        start={{x: 0.0, y: 0.25}} end={{x: 0.4, y: 1.0}}
        locations={[0.1,1.0,0.60]}
        colors={['#3f95ea', '#5cddb4', '#52d3aa']}
        style={{ flex: 1, padding:30 }}>

            <View style={{ flex:2, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width:130, height:130 }}
                source={require('./images/plus.png')}
                />
            </View>

            <View style={{ flex:2 }}>
                <TextInput value={props.email} style={{ color: '#fff', fontSize:20, height: 45 }} placeholder='E-mail' placeholderTextColor='#fff' onChangeText={texto => props.modificaEmail(texto) } />
                <TextInput secureTextEntry value={props.senha} style={{ color: '#fff', fontSize:20, height: 45 }} placeholder='Senha' placeholderTextColor='#fff' onChangeText={texto => props.modificaSenha(texto) } />
                <TouchableHighlight onPress={() => Actions.formCadastro() }>
                    <Text style={{ color: '#fff', fontSize:16, paddingTop:10 }}>Ainda não possui cadastro? Cadastre-se</Text>
                </TouchableHighlight>
            </View>

            <View style={{ flex:2 }}>
                <Button title='Entrar' color='#292b2c' onPress={() => false} />
            </View>
        </LinearGradient>
    );
}
//recebe estado do redux, retornando-os como propriedades
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
    