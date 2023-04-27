import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

const searchText = (state = '', action) => {
    if (action.type === 'SET_GIF_SEARCH') {
        return action.payload;
    }
    return state;
}

const favList = (state = [], action) => {
    if (action.type === 'SET_GIF_FAVORITE') {
        return [...state, action.payload];
    }
    return state;
}

function* fetchGif() {
    try {
        console.log('This is searchText: ' + searchText);
        const gif = yield axios.get(`/api/search/${searchText}`);
        yield put({ type: 'SET_GIF_SEARCH', payload: gif.data});
    } catch (error) {
        console.log(`Error in fetchGif: ${error}`);
        alert('Something went wrong.');
    }
}

function* rootSaga() {
    
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        favList,
        
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
