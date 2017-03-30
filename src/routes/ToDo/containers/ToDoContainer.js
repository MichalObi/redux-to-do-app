import { connect } from 'react-redux'

import { addTodo, changeToDoStatus } from '../modules/ToDo'

import ToDo from '../components/ToDo'

const mapDispatchToProps = {
  addTodo,
  changeToDoStatus
}

const mapStateToProps = (state) => ({
  todos : state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)

