import React from 'react'

export const ToDo = (props) => (
  <div>
    <h2>ToDo</h2>
    <div id='to-do'>
      <div id='add-to-do'>
        <input type='text' placeholder='add to do'></input>
        <button onClick={props.addTodo}>Add to do</button>
      </div>
      <div id='to-do-list'>
        <ul>
          <li>to do one</li>
          <li>to do two</li>
          <li>to to three</li>
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
  addTodo   : React.PropTypes.func.isRequired
}

export default ToDo

