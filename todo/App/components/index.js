import React from 'react';
import {View, Button} from 'react-native';
import ListItems from './ListItems';
import AddTodoContainer from './AddTodoContainer';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
        }}>
          <Button
          title="Go to Setting"
          onPress={() => navigate('Setting', {})}
          />
        <AddTodoContainer />
        <ListItems />
      </View>
    );
  }
}
