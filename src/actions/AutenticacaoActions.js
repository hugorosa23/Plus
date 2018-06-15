import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64'; //transforma caracteres num tipo de códio base-64.

//Action Creator
export const modificaEmail = (texto) => {
    //Função de retorno da Action
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

//função de cadastro de usuario.
export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispatch => {
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
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch ( 
        { 
            type: 'login_usuario_sucesso'
        }
    );

    Actions.home();

}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch ( 
        { 
            type: 'login_usuario_erro',
            payload: erro.message
        }
    );
}

/*Funções de auxilio para a area de cadastro*/
//função de auxilio sucesso
const cadastroUsuarioSucesso = (dispatch) => {   
    dispatch ({ type: 'cadastro_usuario_sucesso' });

    Actions.boasVindas();
}
//função de auxilio erro
const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
}