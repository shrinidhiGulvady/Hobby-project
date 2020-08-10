import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState())
})
store.dispatch({
  type: 'Card_added',
  payload: {
    description: "hello shri"
  }
})
// store.dispatch({
//   type: "Delete_Card",
//   payload: {
//     id: 1
//   }
// })
store.dispatch({
  type: "updated",
  payload: {
    id: 1
  }
})

console.log(store.getState());
unsubscribe();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
