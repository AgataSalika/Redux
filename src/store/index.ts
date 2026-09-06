import { createStore } from "redux";
import { moneyReducer } from "./reducers/moneyReducer";
import { composeWithDevTools } from '@redux-devtools/extension';



export const store = createStore(moneyReducer, composeWithDevTools());
export type RootState = typeof moneyReducer // moneyReducer ф-я кот принимает кот какое-то состояние и какое-то действие, мы создаем тип,
//  кот описывает что мы хотим делать с состоянием в нашем приложении

export type AppDispatch = typeof store.dispatch
