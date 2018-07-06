import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './style/normalize.css';
import './style/index.less';

ReactDOM.render(<App />,document.getElementById("app"))

if (module.hot) {
    module.hot.accept()
}