import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './reducers/CounterReducer';

const store = createStore(counterReducer, composeWithDevTools());

export default store;
