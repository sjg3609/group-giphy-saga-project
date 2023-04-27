import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

const searchList = (state = [], action) => {
    if (action.type === 'FETCH_GIF_SEARCH') {
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

function* fetchGif(action) {
    try {
        const gif = yield axios.get(`/api/search/${action.payload}`);
        yield put({ type: 'FETCH_GIF_SEARCH', payload: gif.data.data});
    } catch (error) {
        console.log(`Error in fetchGif: ${error}`);
        alert('Something went wrong.');
    }
}

function* postFav(action) {
    try {
        const favorite = yield axios.post('/api/favorite', action.payload);
    } catch (error) {
        console.log(error);
        alert('Something went wrong.');
    }
}

function* rootSaga() {
    yield takeEvery('SET_GIF_FAVORITE', postFav);
    yield takeEvery('SET_GIF_SEARCH', fetchGif);
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        favList,
        searchList,
        
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
