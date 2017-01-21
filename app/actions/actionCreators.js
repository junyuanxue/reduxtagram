// an action: returns an object of what happened and
// what needs to be changed
import * as photosActions from './photosActions'
import * as commentsActions from './commentsActions'
import * as userActions from './userActions'

const actions = {
  ...photosActions,
  ...commentsActions,
  ...userActions
}

export default actions
