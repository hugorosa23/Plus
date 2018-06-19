import React from 'react';
import { View, Text, Image, StatusBar, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={{ backgroundColor: "#292b2c", elevation: 4 }}>
        <StatusBar backgroundColor="#212324" />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

            <View style={{ height: 50, justifyContent: 'center' }}>
                <Image style={{ width:40, height:40, marginLeft: 35 }} source={require('./images/plus.png')} />
            </View>

            <View style={{ height: 50, justifyContent: 'center', marginRight: 20 }}>
                <TouchableHighlight onPress={() => Actions.drawerMenu()} underlayColor="transparent">
                    <Image style={{ width:40, height:40 }} source={require('./images/menu.png')} />
                </TouchableHighlight>
            </View>

        </View>

        <TabBar { ...props} style={{backgroundColor: '#292b2c', elevation: 0}} />
    </View>
)