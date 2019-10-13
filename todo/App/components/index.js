import React from 'react';
import {View, Text} from 'react-native';
import ListItems from './ListItems';
import AddTodo from './AddTodo';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          paddingTop: 100,
          flex: 1,
        }}>
        <AddTodo />
        <ListItems />
      </View>
    );
  }
}
