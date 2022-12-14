import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserProvider } from './context/User'

import Home from './pages/Home'
import Product from '..'
import QueryProducts from './pages/QueryProducts'

const App = () => (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Product />} />
        <Route path="consultar-produtos" element={<QueryProducts />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
)

export default App
