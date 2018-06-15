import React, {Component} from 'react';

import {CalendarList} from 'react-native-calendars';

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
}