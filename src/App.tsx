import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
const {cash, name} = useSelector((state)=>{
return state
})
const dispatch = useDispatch()
function addCash(sumOfMoney){
dispatch({type:'money/plus', payload:sumOfMoney})
}

function reduceCash(sumOfMoney) {
  dispatch({type:"money/minus", payload:sumOfMoney})
}

console.log(cash,name);
  return (
    <>
    <p>{name}</p>
    <p>{cash}</p>
    <button onClick={()=>{
      addCash(+(prompt()))
    }}>+</button>
    <button onClick={()=>{
      reduceCash(+(prompt()))
    }}>-</button>

    </>
  )
}

export default App
