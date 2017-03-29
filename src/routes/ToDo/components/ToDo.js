import React from 'react'

let input;

export const ToDo = (props) => (
  <div>
    <h2>ToDo</h2>
    <div id='to-do'>
      <div id='add-to-do'>
        <input type='text' placeholder='add to do' ref={(node) => input = node} />
        <button onClick={() => props.addTodo(input.value)}>Add to do</button>
      </div>
      <div id='to-do-list'>
        <ul>
          {props.todos.map(todo =>
            <li>ID: {todo.id} Text: {todo.text} Complited: {todo.complited}</li>
          )}
        </ul>
      </div>
      <div id='to-do-filter'>
        <ul>
          <li>Show:</li>
          <li>All</li>
          <li>Active</li>
          <li>Complited</li>
        </ul>
      </div>
    </div>
  </div>
)

ToDo.props = {
  addTodo   : React.PropTypes.func.isRequired,
  todos     : React.PropTypes.array.isRequired
}

export default ToDo

