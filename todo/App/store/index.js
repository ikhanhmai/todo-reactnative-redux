import reducers from '../reducers';
import { createStore } from 'redux';
import { createSagaMiddleware } from 'react-redux';
import rootSaga from '../sagas/rootSaga';
const sageMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sageMiddleware));
sageMiddleware.run(rootSaga);
export default store;
