import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './common/App';
import * as serviceWorker from './serviceWorker';

/* redux 라우터 추가 */
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import configureStore, {history} from './stores'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
