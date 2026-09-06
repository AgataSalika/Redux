import "./App.css";
import { plus } from "./store/actions/moneyActions";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

function App() {
  const { cash, name } = useAppSelector((state) => {
    return state;
  });
  const dispatch = useAppDispatch();
  function addCash(sumOfMoney: number) {
    dispatch(plus(sumOfMoney));
  }

  function reduceCash(sumOfMoney: number) {
    // dispatch(minus(sumOfMoney))
    dispatch({ type: "money/minus", payload: sumOfMoney });
  }

  console.log(cash, name);
  return (
    <>
      <p>{name}</p>
      <p>{cash}</p>
      <button
        onClick={() => {
          const number = prompt();
          if (number) {
            addCash(+number);
          }
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          const number = prompt();
          if (number) {
            reduceCash(+number);
          }
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
