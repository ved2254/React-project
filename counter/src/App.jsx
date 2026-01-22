import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] =  useState(15);



  const addValue = () => {
    if (counter>=20){

    }else{

      setCounter(counter+=1);
    }
  }

  const removeVlue = () => {
    if (counter<=0){

    }else{

      setCounter(counter-=1);
    }

  }



  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value:  {counter} </h2>
      <button
       onClick ={addValue}
       >Add Value</button> <br />
      <br />
      <button
      onClick={removeVlue}
      >Remove Value</button>

    </>
  )
}

export default App
