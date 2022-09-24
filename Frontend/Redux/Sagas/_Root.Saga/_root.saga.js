import { all } from 'redux-saga/effects';
// import loginSaga from './login.saga';
// import registrationSaga from './registration.saga';
// import userSaga from './user.saga';
import firstSaga from './first.saga';
import secondSaga from './second.saga';

export default function* rootSaga() {
  yield all([
    // sagas placed in here are registered
    // loginSaga(), 
    // registrationSaga(),
    // userSaga(),
    firstSaga(),
    secondSaga(),
  ]);
}