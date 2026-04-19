import { useState } from 'react'
import './App.css'
import Logo from './components/common/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Logo />
    </>
  )
}

export default App
