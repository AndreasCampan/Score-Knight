import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainView from './components/MainView';
import reportWebVitals from './reportWebVitals';

class App extends React.Component{
  render() {
    return(
        <React.StrictMode>
          <MainView />
        </React.StrictMode>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(React.createElement(App), document.getElementById('root'));