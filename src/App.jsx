
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Container from './components/common/Container'
import Navbar from './components/common/Navbar'
import ProductList from './features/products/components/ProductList'
import CartDrawer from './features/cart/components/CartDrawer'
import ProductDetaile from './features/products/pages/ProductDetail'
import FavoritePage from './features/favorites/pages/FavoritePage'
import { Toaster } from './components/ui/sonner'
import CheckoutPage from './features/checkout/pages/CheckoutPage'
import LoginPage from './features/auth/pages/LoginPage'
import MainLayout from './components/layout/MainLayout'
import AuthLayout from './components/layout/AuthLayout'


function App() {

  const [cartOpen, setCartOpen] = useState(false)
  
  return (
      <div className='min-h-screen bg-background text-foreground'>
        <Toaster position="top-center" richColors closeButton />
        <Navbar onOpenCart={() => setCartOpen(true)} />
        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        />
        
            <Routes>
              <Route element={<MainLayout />}>
               <Route path='/' element={<ProductList />} />
               <Route path='/product/:id' element={<ProductDetaile />}/>
               <Route path='/favorites' element={<FavoritePage />} />
               <Route path='/checkout' element={<CheckoutPage />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path='/login' element={<LoginPage />} />
              </Route>
            </Routes>

      </div>
  )
}

export default App
