import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, TextInput, Button, Image, Text } from 'react-native';

import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from '../actions/AutenticacaoActions';

class formCadastro extends Component {
    //remove o header do componente
    static navigationOptions = {
        header: null
      };
//função interna do objeto
    _cadastraUsuario() {

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }
//renderiza a tela.
    render() {
        return (
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
                        <TextInput 
                            value={this.props.nome} 
                            style={{ fontSize:20, color: '#fff', height: 45 }} 
                            placeholder='Nome' placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaNome(texto)} />
                        <TextInput 
                            value={this.props.email} 
                            style={{ fontSize:20, color: '#fff', height: 45 }} 
                            placeholder='E-mail' placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            style={{ fontSize:20, color: '#fff', height: 45 }} 
                            placeholder='Senha' placeholderTextColor='#fff' 
                            onChangeText={texto => this.props.modificaSenha(texto)} />

                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>
                    </View>
        
                    <View style={{ flex:1 }}>
                        <Button title='Cadastrar' color='#292b2c' onPress={() => this._cadastraUsuario()} />
                    </View>
            </LinearGradient>
        );
    }
    
}

//recebe estado do redux, retornando-os como propriedades
const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro
    }
)

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(formCadastro);