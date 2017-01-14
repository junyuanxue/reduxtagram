import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from '../store'

import App from '../components/App'
import SinglePhoto from '../components/SinglePhoto'
import PhotoGrid from '../components/PhotoGrid'

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={SinglePhoto} />
      </Route>
    </Router>
  </Provider>
)

export default routes
