import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
//componentes das tabs
import Agenda from './Agenda';
import Calendario from './Calendario';
import Plus from './Plus'

export default class Home extends Component {
    //remove o header do componente
    static navigationOptions = {
        header: null
    };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Agenda' },
      { key: 'second', title: 'Calendário' },
      { key: 'third', title: '+Plus'}
    ],
  };

  _renderTabBar = props => <TabBarMenu {...props} indicatorStyle={{ backgroundColor: '#52d3aa' }} style={styles.header} />;

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Agenda,
          second: Calendario,
          third: Plus
        })}
        renderTabBar={this._renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
      backgroundColor: '#292b2c',
    },
    tab: {
      width: 120,
    },
    indicator: {
      backgroundColor: '#292b2c',
    },
    label: {
      color: '#fff',
      fontWeight: '400',
    },
    header: {
      backgroundColor: '#292b2c'
    },
});