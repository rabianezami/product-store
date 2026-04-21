
import { useState } from 'react'
import './App.css'
import Container from './components/common/Container'
import Navbar from './components/common/Navbar'
import Toolbar from './components/common/Toolbar'

function App() {

  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-write'>
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main className='py-8'>
        <Container>
          <Toolbar />
        </Container>
      </main>
    </div>
  )
}

export default App
