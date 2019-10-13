import {combineReducers} from 'redux';
import addTodo from './addTodo';
export default combineReducers({
  todos: addTodo,
});
