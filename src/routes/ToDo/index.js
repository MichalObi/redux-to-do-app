import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'to-do',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ToDo = require('./containers/ToDoContainer').default
      const reducer = require('./modules/ToDo').default

      /*  Add the reducer to the store on key 'todo'  */
      injectReducer(store, { key: 'todos', reducer })

      /*  Return getComponent   */
      cb(null, ToDo)

    /* Webpack named bundle   */
    }, 'todos')
  }
})