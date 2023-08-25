import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import coctelReducer from '../Store/reducers/reducers'; // Importa tu reducer
import fetchCoctelNameGenerator from './sagas/sagas'; // Importa tu saga raíz

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  coctel: coctelReducer, // Cambia "coctel" por el nombre que desees
  // ...otros reducers si los tienes
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchCoctelNameGenerator);

export default store;
