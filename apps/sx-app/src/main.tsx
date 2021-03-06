import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './app/app';

ReactDOM.render(
  // <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>,
  // </Provider>
  document.getElementById('root')
);
