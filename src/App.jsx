
import { useState } from 'react'
import './App.css'
import Container from './components/common/Container'
import Navbar from './components/common/Navbar'
import ProductList from './features/products/components/ProductList'


function App() {

  const [cartOpen, setCartOpen] = useState(false)

 
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main className='py-8'>
        <Container>
          <ProductList />
        </Container>
      </main>
    </div>
  )
}

export default App
