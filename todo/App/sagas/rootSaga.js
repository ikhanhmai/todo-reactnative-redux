import { fetchUser } from './fetchUserSaga';
import { takeLatest } from 'redux-saga/effects';

export default function*() {
  yield takeLatest('ADD_TODO', fetchUser);
}
