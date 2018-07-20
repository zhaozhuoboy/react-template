import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app/App.jsx';
import './style/normalize.css';
import './style/index.less';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
document.getElementById("app"))

if (module.hot) {
    module.hot.accept()
}