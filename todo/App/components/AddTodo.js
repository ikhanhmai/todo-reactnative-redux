import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {addTodo} from '../actions/index';
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChangeTextHandler = text => {
    this.setState({
      text: text,
    });
  };

  addTodoHandler = () => {
    this.props.dispatch(addTodo(this.state.text));
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="type to add todo"
          onChangeText={this.onChangeTextHandler}
        />
        <Button title={'Add Todo'} onPress={this.addTodoHandler} />
      </View>
    );
  }
}
export default AddTodo;
