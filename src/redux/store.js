import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const composedEnhancer = composeWithDevTools()

const store = createStore(rootReducer, composedEnhancer);

export default store;