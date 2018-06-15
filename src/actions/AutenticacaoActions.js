import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64'; //transforma caracteres num tipo de códio base-64.
import { MODIFICA_EMAIL, MODIFICA_SENHA, MODIFICA_NOME, CADASTRO_USUARIO_SUCESSO,
         CADASTRO_USUARIO_ERRO, LOGIN_USUARIO_SUCESSO, LOGIN_USUARIO_ERRO, 
         LOGIN_EM_ANDAMENTO, CADASTRO_EM_ANDAMENTO  } from './types';

//Action Creator
export const modificaEmail = (texto) => {
    //Função de retorno da Action
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

//função de cadastro de usuario.
export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispatch => {

        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        //lógica de registo no banco de dados do firebase.
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            //promisses, são executadas após a função principal
            .then(user => {
                let emailB64 = b64.encode(email)

                firebase.database().ref(`/usuarios/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastroUsuarioSucesso(dispatch))
                })
            .catch(erro => cadastroUsuarioErro(erro, dispatch)); //promessa de erro
    }

}
//função de autenticação de usuario.
export const autenticarUsuario = ({ email, senha }) => {

    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch ( 
        { 
            type: LOGIN_USUARIO_SUCESSO
        }
    );

    Actions.home();

}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch ( 
        { 
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }
    );
}

/*Funções de auxilio para a area de cadastro*/
//função de auxilio sucesso
const cadastroUsuarioSucesso = (dispatch) => {   
    dispatch ({ type: CADASTRO_USUARIO_SUCESSO });

    Actions.boasVindas();
}
//função de auxilio erro
const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
}