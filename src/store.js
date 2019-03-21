import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import { save, load } from 'redux-localstorage-simple';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk, save({ states: ['groups'], namespace: 'redux' })));

const store = createStore(reducer, load({ states: ['groups'], namespace: 'redux' }), enhancer);

export default store;
