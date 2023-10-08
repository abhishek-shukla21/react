import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // setcounter is a method which will control counter 
  // let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter +  1)
  }

  const subValue = () => {
    console.log("clicked", counter)
    // counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button> {'  '}
      <button
      onClick={subValue}
      >Remove Value</button>
    </>
  )
}

export default App
