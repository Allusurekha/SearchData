import * as types from "./types";

export function loadUsers() {
  return {
    type: types.LOAD_USERS
  };
}

export function loadUsersComplete(users) {
  return {
    type: types.LOAD_USERS_COMPLETE,
    payload: users
  };
}
