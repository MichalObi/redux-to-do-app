let nextToDoId = 0

// Action creators
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextToDoId++,
    text,
    completed: false
  }
}

const todo = (state, action) => {
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
  switch (action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      todo(undefined, action)
    ]
  }
}

export default todos
