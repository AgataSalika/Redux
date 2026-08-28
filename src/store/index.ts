import { createStore } from "redux";
import { moneyReducer } from "./reducers/moneyReducer";

export const store = createStore(moneyReducer)