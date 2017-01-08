import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from '../components/Main'
import SinglePhoto from '../components/SinglePhoto'
import PhotoGrid from '../components/PhotoGrid'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path='/view/:postId' component={SinglePhoto} />
    </Route>
  </Router>
)

export default router
