import React from 'react';
import {
  Icon
} from 'react-native';

import FAB from 'react-native-fab'
//component que adiciona um fab button para a aplicação, em especifico para adicionar novos eventos.
<FAB buttonColor="#52d3aa" iconTextColor="#292b2c" 
onClickAction={() => {console.log("FAB pressed")}} visible={true} 
iconTextComponent={<Icon name="all-out"/>} />