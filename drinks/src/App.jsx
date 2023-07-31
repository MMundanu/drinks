import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Index'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { AppRouters } from './routes'
import { MainLayout } from './layouts'

function App() {

  return (
    <>
    <MainLayout> 
      <AppRouters />
    </MainLayout>
      
      
    </>
  )
}

export default App
