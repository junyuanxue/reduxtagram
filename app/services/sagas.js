import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from './api'

// worker Saga: will be fired on FETCH_PHOTOS actions
function * fetchPhotos () {                 // The function* declaration defines a generator function,
  try {                                     // which returns a Generator object.
    const photos = yield call(api.fetchPhotos)
    yield put({type: 'PHOTOS_FETCH_SUCCEEDED', photos: photos})
  } catch (e) {
    console.log(e)
    yield put({type: 'PHOTOS_FETCH_FAILED', message: e})
  }
}

/*
  Starts fetchPhotos on each dispatched `FETCH_PHOTOS` action.
  Allows concurrent fetches of photos.
*/
// function* mySaga () {
//   yield takeEvery('FETCH_PHOTOS', fetchPhotos)
// }

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If `FETCH_PHOTOS` gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function * saga () {
  yield takeLatest('FETCH_PHOTOS', fetchPhotos)
}

export default saga
