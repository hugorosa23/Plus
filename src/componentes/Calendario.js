import React, {Component} from 'react';

import {CalendarList} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

export default class CalendarsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CalendarList current={'2018-06-15'} pastScrollRange={24} futureScrollRange={24} 
      markedDates={
        {
         '2018-06-14': {startingDay: true, color: '#52d3aa'},
         '2018-06-15': {selected: true, endingDay: true, color: '#52d3aa', textColor: 'gray'},
         '2018-06-04': {disabled: true, startingDay: true, color: '#52d3aa', endingDay: true}
        }}
      markingType={'period'}
      />
    );
  }
  /*
  LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Matço','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sáb.']
  };
  
  LocaleConfig.defaultLocale = 'br';*/
}