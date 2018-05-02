import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import routes from './route/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    {routes}
  </div>, 
  document.getElementById('root')
);
registerServiceWorker();
