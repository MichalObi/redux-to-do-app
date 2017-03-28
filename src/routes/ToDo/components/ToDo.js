import React from 'react'
import { addTodo } from '../modules/ToDo.js'

let input

export const ToDo = () => (
  <div>
    <h2>ToDo</h2>
    <div id='to-do'>
      <div id='add-to-do'>
        <input type='text' placeholder='add to do' ref={node => { input = node }}></input>
        <button onClick={() => addTodo(input.value)}>Add to do</button>
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

export default ToDo

