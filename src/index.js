import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Home, Mine } from './screens';
import Mine1 from './screens/newMine';

import {createStore}from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers/reducer';

let store = createStore(reducer)

const Index = ({pathname}) => {
      switch(pathname) {
        case '/':
            return <Home />
        case '/app':
            return <App />
        case '/mine':
            return <Mine1 />
      }
}

let pathname = window.location.pathname;

ReactDOM.render(
  <Provider store={store}>
     <Index pathname={pathname} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
})
