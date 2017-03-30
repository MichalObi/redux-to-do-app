let nextToDoId = 0

export const ADD_TODO = 'ADD_TODO'
export const CHANGE_STATUS = 'CHANGE_STATUS'

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

export const changeToDoStatus = ({id, completed, text}) => {
  return {
    type: CHANGE_STATUS,
    payload: {
      id,
      text,
      completed: !completed
    }
  }
} 

// Reducer for todos collection
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case CHANGE_STATUS:
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
     case CHANGE_STATUS:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed
      }  
  }
}

export default todos
