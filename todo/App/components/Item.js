import React from 'react';
import {Text} from 'react-native';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>{this.props.text}</Text>;
  }
}
