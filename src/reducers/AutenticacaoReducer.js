import { MODIFICA_EMAIL, MODIFICA_SENHA, MODIFICA_NOME, CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO, LOGIN_USUARIO_ERRO, LOGIN_EM_ANDAMENTO, CADASTRO_EM_ANDAMENTO  } from '../actions/types';

//O redux gerencia as variáveis de estado da aplicação.
const INICIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false
}

export default (state = INICIAL_STATE, action) => {
    console.log(action);
    //estados dos componentes de ActionCreator
    switch(action.type) {
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }
        //Condições para cadastro de usuario.
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loading_cadastro: false }
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loading_cadastro: false }
        //Condições para login de usuario.
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loading_login: false }
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loading_login: true }
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loading_cadastro: true }
        default:
        return state;
    }
}