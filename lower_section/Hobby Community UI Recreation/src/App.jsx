import React from 'react'
import AddYourOwnSection from './components/AddYourOwnSection'
import TestimonialsSection from './components/TestimonialsSection'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'
import './App.css'

function App() {
  return (
    <div className="app">
      <AddYourOwnSection />
      <TestimonialsSection />
      <HeroSection />
      <FooterSection />
    </div>
  )
}

export default App
