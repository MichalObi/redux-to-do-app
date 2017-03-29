import { connect } from 'react-redux'

import { addTodo } from '../modules/ToDo'

import ToDo from '../components/ToDo'

const mapDispatchToProps = {
  addTodo
}

const mapStateToProps = (state) => ({
  todos : state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)

