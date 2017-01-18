import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/index'

// import posts from './data/posts'
// import comments from './data/comments'

// create an object for the default data
// const defaultState = {
//   posts,
//   comments
// }

// set up redux dev tool
const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// const store = createStore(rootReducer, defaultState, enhancer)
const store = createStore(rootReducer, enhancer)

export const history = syncHistoryWithStore(browserHistory, store)

// hot reloading redux
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
