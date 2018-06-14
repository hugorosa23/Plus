import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'; //Import do firebase.
import ReduxThunk from 'redux-thunk' //Middleware para funções assíncronas.

import Routes from './Routes';//Criar rotas para aplicação, navegar entre telas.
import reducers from './reducers'; //Define o estado inicial das variavéis(principalmente textInputs) dentro da Store.

class App extends Component {

    componentWillMount() {
        // Inicializa o Firebase e estabelece a comunicação com a aplicação.
          firebase.initializeApp({
            apiKey: "AIzaSyDjv1JgFcsnpWRKr2W3MNpKiqTJfu_G8Ik",
            authDomain: "plus-hakon.firebaseapp.com",
            databaseURL: "https://plus-hakon.firebaseio.com",
            projectId: "plus-hakon",
            storageBucket: "plus-hakon.appspot.com",
            messagingSenderId: "834873684532"
          });
    }
//renderiza os componentes.
    render() {
        return (
            <Provider store={createStore( reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
    );
    
    }
    
}

export default App;

