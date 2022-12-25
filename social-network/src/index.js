import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, subscribe} from './redux/state';
import state from './redux/state';
import {BrowserRouter} from 'react-router-dom';



let rerenderEntireTree = () => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>
);
};

rerenderEntireTree();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


subscribe(rerenderEntireTree);