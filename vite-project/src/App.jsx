import Dice from './Dice'
import './App.css'
import './dice.css'
import { useState } from 'react'

function App() {
  let [number1,setNumber1]=useState(1);
  let [number2,setNumber2]=useState(1);
  let [number3,setNumber3]=useState(1);

  return (
    <>
    <div className='dice-container'>
    <button onClick={(ev)=>{setNumber1(Math.floor(Math.random()*6+1))}} type="button"><Dice number={number1}/></button>
    <button onClick={(ev)=>{setNumber2(Math.floor(Math.random()*6+1))}}type="button"><Dice number={number2}/></button>
    <button onClick={(ev)=>{setNumber3(Math.floor(Math.random()*6+1))}} type="button"><Dice number={number3}/></button>
    </div> 
    </>
  )
}

export default App