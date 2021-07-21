import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from '../reducers';
import thunk from 'redux-thunk';

const customMiddleWare = (store) => (next) => (action) => {
  console.log(store.getState());
  next(action);
};

let store = createStore(allReducers, compose(applyMiddleware(thunk)));

var redux_devTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (redux_devTool) {
  store = createStore(
    allReducers,
    compose(applyMiddleware(thunk, customMiddleWare), redux_devTool)
  );
}

export default store;
