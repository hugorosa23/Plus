import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formCadastro = props => (
    <LinearGradient 
        start={{x: 0.0, y: 0.25}} end={{x: 0.4, y: 1.0}}
        locations={[0.1,1.0,0.60]}
        colors={['#3f95ea', '#5cddb4', '#52d3aa']}
        style={{ flex: 1, padding:30 }}>

            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', paddingTop: 60 }}>
                <Image style={{ width:130, height:130 }}
                source={require('./images/plus.png')}
                />
            </View>

            <View style={{ flex:3, paddingTop: 80 }}>
                <TextInput value={props.nome} style={{ fontSize:20, color: '#fff', height: 45 }} placeholder='Nome' placeholderTextColor='#fff' onChangeText={texto => props.modificaNome(texto)} />
                <TextInput value={props.email} style={{ fontSize:20, color: '#fff', height: 45 }} placeholder='E-mail' placeholderTextColor='#fff' onChangeText={texto => props.modificaEmail(texto)} />
                <TextInput secureTextEntry value={props.senha} style={{ fontSize:20, color: '#fff', height: 45 }} placeholder='Senha' placeholderTextColor='#fff' onChangeText={texto => props.modificaSenha(texto)} />
            </View>

            <View style={{ flex:1 }}>
                <Button title='Cadastrar' color='#292b2c' onPress={() => false} />
            </View>
    </LinearGradient>
    );

//recebe estado do redux, retornando-os como propriedades
const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha })(formCadastro);