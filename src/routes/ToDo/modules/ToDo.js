let nextToDoId = 0

export const ADD_TODO = 'ADD_TODO'

// Action creators
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextToDoId++,
      text,
      completed: false
    }
  }
}

// Reducer for todos collection
const toDos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

// Reducer for specyfic to do
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed
      }
  }
}

export default toDos
