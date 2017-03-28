let nextToDoId = 0

// Action creators
export const addTodo = (text) => {
  debugger;
  return {
    type: 'ADD_TODO',
    id: nextToDoId++,
    text,
    completed: false
  }
}

const todo = (state, action) => {
  debugger;
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
  }
}

const todos = (state = [], action) => {
  debugger;
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default todos
