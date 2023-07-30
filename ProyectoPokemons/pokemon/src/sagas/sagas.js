// saga.js
import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_DATA, fetchDataSuccess, fetchDataFailure } from "../actions";

function* fetchPokemonData(action) {
  try {
    const { name } = action.payload;
    const response = yield call(fetch, `https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_DATA, fetchPokemonData);
}

export default rootSaga;
