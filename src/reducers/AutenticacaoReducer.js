const INICIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
}

export default (state = INICIAL_STATE, action) => {
    console.log(action);
    //estados dos componentes de ActionCreator
    if(action.type == 'modifica_nome'){
        return { ...state, nome: action.payload }
    }
    if(action.type == 'modifica_email'){
        return { ...state, email: action.payload }
    }
    if(action.type == 'modifica_senha'){
        return { ...state, senha: action.payload }
    }
    //Condições para cadastro de usuario.
    if(action.type == 'cadastro_usuario_erro') {
        return { ...state, erroCadastro: action.payload }
    }
    if(action.type == 'cadastro_usuario_sucesso') {
        return { ...state, nome: '', senha: ''}
    }
    //Condições para login de usuario.
    if(action.type == 'login_usuario_erro') {
        return { ...state, erroLogin: action.payload }
    }
    return state;
}