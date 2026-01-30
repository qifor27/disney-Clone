import './App.css'
import { GiHook } from 'react-icons/gi'
import { useState } from 'react'
import Header from './Components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header />
    </div>
  )
}

export default App
