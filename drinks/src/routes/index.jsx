import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const AppRouters = () => {
  return (
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
     </Routes>
   </BrowserRouter>
  )
}
