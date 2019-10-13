const addTodo = (state = [], action) => {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
    },
  ];
};
export default addTodo;
