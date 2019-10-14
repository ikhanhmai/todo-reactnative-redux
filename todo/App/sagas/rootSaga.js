import { fetchUser } from './fetchUserSaga';
import { takeLatest } from 'react-redux/effects';

export default function*() {
  yield takeLatest('ADD_TODO', fetchUser);
}
