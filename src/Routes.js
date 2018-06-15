import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
//importação das Rotas e componentes da aplicação, toda nova tela criada para a aplicação deve ser importada aqui.
import FormLogin from './componentes/FormLogin';
import FormCadastro from './componentes/FormCadastro';
import BoasVindas from './componentes/BoasVindas';
import Home from './componentes/Home';

export default props =>(
    <Router>
        <Scene key='root'>
            <Scene key='formLogin' component={FormLogin} title="Login" />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
            <Scene key='boasVindas' component={BoasVindas} title="Bem Vindo!" />
            <Scene key='home' component={Home} title="Home" />
        </Scene>
    </Router>
)