import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight, Modal, Form, Image, TextInput, Button
} from 'react-native';
import {Agenda} from 'react-native-calendars';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';


export default class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      modalVisible: false,
    };
  }
//modal
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2018-06-19'}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
        />

        <ActionButton buttonColor="#52d3aa">
          <ActionButton.Item buttonColor='#52d3aa' title="Nova Anotação" onPress={() => this.setModalVisible(true)}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#292b2c' title="Notificações" onPress={() => alert("Sem novas notificações.")}>
            <Icon name="md-notifications" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Todas as tarefas" onPress={() => alert("Vazio.")}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <Modal
          style={{ padding: 30, flex: 1 }}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
            <View style={{marginTop: 22}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                <View style={{ marginLeft: 30, height: 50, justifyContent: 'center' }}>
                  <Text style={{ fontSize:20, justifyContent:'center', alignItems: 'center' }}>Novo Lembrete</Text>
                </View>

                <View style={{ height: 50, justifyContent: 'center', marginRight: 20 }}>
                    <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)} underlayColor="transparent">
                        <Image style={{ width:40, height:40 }} source={require('./images/fechar.png')} />
                    </TouchableHighlight>
                </View>
              </View>
              
              <View style={{ flex:2, marginTop: 40, padding: 20 }}>
                  <TextInput 
                      style={{ fontSize:20, height: 45 }} 
                      placeholder='Título' 
                      onChangeText={() => false} />
                  <TextInput 
                      style={{ fontSize:20, height: 45 }} 
                      placeholder='Descrição' 
                      onChangeText={() => false} />
                </View>
                <View style={{ flex: 1, marginTop: 60 }}>
                  <Button title='Entrar' color='#292b2c' onPress={() => alert('Sucesso!')} />
                </View>
            </View>
          </Modal>
      </View>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Exemplo de anotação! ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.item}><Text>Nenhum registro para esta data.</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
/*
const mapStateToProps = state => ({
  cadastra_titulo_lembrete: state.AppReducer.cadastra_titulo_lembrete,
  cadastra_descricao_lembrete: state.AppReducer.cadastra_descricao_lembrete
})

export default connect(mapStateToProps, null)(Agenda);*/