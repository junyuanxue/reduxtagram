// an action: returns an object of what happened and
// what needs to be changed
import * as photosActions from './photosActions'
import * as commentsActions from './commentsActions'

const actions = {
  ...photosActions,
  ...commentsActions
}

export default actions
