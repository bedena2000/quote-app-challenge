import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

// Routing
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <App />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
);
