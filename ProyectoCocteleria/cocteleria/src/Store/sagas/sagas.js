import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCoctelNameSuccess, fetchCoctelNameFailed, fetchCoctelNameStart } from '../actions/actions';

function* fetchCoctelNameGenerator(action) {
  try {
    const { nameCoctel } = action.payload;
    const url = `https://api.api-ninjas.com/v1/cocktail?name=${nameCoctel}`;
    const headers = {
      method: 'GET',
      'X-Api-Key': '+m6oiBjVoWBGJcUs96gIMA==SgGhz4SrKAqSM1Fu',
      'Content-Type': 'application/json',
    };

    const response = yield fetch(url, { headers });
    const data = yield response.json(); // Espera a que la promesa se resuelva
    console.log("datos en el sagas",data);
    console.log("en el sagas 2",data[0]);
    console.log("en el sagas 3",data[0].name);
    yield put(fetchCoctelNameSuccess(data[0]));
  } catch (response) {
    yield put(fetchCoctelNameFailed(response));
  }
}

function* mySaga() {
  yield takeEvery('FETCH_COCTEL_NAME_START', fetchCoctelNameGenerator);
}

export default mySaga;
