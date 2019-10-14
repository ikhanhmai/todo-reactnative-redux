import { put, call } from 'redux-saga/effects';

const fetchUserApi = delay =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Khanh Mai',
        position: 'Full-stack developer',
        email: 'ikhanhmai@gmail.com'
      });
    }, delay);
  });

export function* fetchUser() {
  try {
    const response = yield call(fetchUserApi, 1000);
    yield put({ type: FETCH_USER_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: CANCEL_FETCHING_USER });
  }
}
