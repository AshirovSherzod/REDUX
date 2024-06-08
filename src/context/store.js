import { combineReducers, legacy_createStore } from "redux";
import { users } from "./reducers/usersSlice";

const reducers = combineReducers({
    users
})

export const store = legacy_createStore(reducers)