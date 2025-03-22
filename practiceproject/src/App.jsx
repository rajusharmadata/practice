import { useState } from 'react'
import './index.css'
import './App.css'
import Navcontener from './Navcontener'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navcontener />
    </>
  )
}

export default App
