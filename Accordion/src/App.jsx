import { useState } from 'react'
import './App.css'
import Accordions from './Components/Accordions/Accordions'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Accordions/>
   </div>
  )
}

export default App
