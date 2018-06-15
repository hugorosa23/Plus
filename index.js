import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';
import { YellowBox } from 'react-native';

const Plus = props => (
    <App />
)

AppRegistry.registerComponent('Plus', () => App);

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger is in a background tab', 'Setting a timer for a long period of time']);
