import React from 'react'
import HeroSection from './HeroSection'
import LoginForm from './LoginForm'
import AddYourOwnSection from './AddYourOwnSection'
import TestimonialsSection from './TestimonialsSection'
import FooterSection from './FooterSection'
import './MainContent.css'

function MainContent() {
  return (
    <main className="main-content">
      <div className="content-container">
        <div className="hero-login-wrapper">
          <HeroSection />
          <LoginForm />
        </div>
        <AddYourOwnSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </main>
  )
}

export default MainContent
