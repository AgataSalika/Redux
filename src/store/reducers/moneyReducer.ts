import { plus, minus } from "../actions/moneyActions.ts";

interface initialType {
  cash: number;
  name: string;
}

const initialState: initialType = {
  cash: 100,
  name:'test'
};

//reducer это какая то функция, которая принимает текущее состояние и действие (action) и возвращает новое СОСТОЯНИЕ

export const moneyReducer = (state = initialState, action): initialType => {
  switch (action.type) {
    case "money/plus":
      return { ...state, cash: state.cash + action.payload };
    case "money/minus":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
