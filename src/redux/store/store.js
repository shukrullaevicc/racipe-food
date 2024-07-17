import { legacy_createStore } from "redux";
import { reducer } from "../reducer/ReducerController";

const store = legacy_createStore(reducer);

export default store;