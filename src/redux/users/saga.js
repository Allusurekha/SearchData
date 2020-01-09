import { put, takeEvery } from "redux-saga/effects";
import * as types from "./types";
import * as service from "./service";
import * as actions from "./actions";

function* loadUsers() {
  const json = yield service.getUsers();
  yield put(actions.loadUsersComplete(json.data));
}

export default function* saga() {
  yield takeEvery(types.LOAD_USERS, loadUsers);
}
