import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
//importação das Rotas e Cenas da aplicação, toda nova tela criada para a aplicação deve ser importada aqui.
import FormLogin from './componentes/FormLogin';
import FormCadastro from './componentes/FormCadastro';

export default props =>(
    <Router>
        <Scene key='root'>
            <Scene key='formLogin' component={FormLogin} title="Login" />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
        </Scene>
    </Router>
)