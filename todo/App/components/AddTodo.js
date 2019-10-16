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
    if(this.state.text){
      this.props.dispatch(addTodo(this.state.text));
      this.setState({text:''});
    }
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="type to add todo"
          onChangeText={this.onChangeTextHandler}
          value={this.state.text}
        />
        <Button title={'Add Todo'} onPress={this.addTodoHandler} />
      </View>
    );
  }
}
export default AddTodo;
