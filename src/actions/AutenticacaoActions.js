import firebase from 'firebase';

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
            .then(user => cadastroUsuarioSucesso(dispatch)) //promessa de sucesso
            .catch(erro => cadastroUsuarioErro(erro, dispatch)); //promessa de erro
    }

}
//função de auxilio sucesso
const cadastroUsuarioSucesso = (dispatch) => {   
    dispatch ({ type: 'sucesso' });
}
//função de auxilio erro
const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
}