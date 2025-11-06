import React from 'react'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Explore your <span className="text-blue">hobby</span> or <span className="text-purple">passion</span>
        </h1>
        
        <div className="hero-description">
          <p>
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, 
            suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be 
            about visual or performing arts, sports, games, gardening, model making, cooking, indoor or 
            outdoor activities...
          </p>
          
          <p>
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, 
            products, services or events. Hop on your hobbyhorse and enjoy the ride.
          </p>
        </div>
      </div>
      
      <div className="hero-illustration">
        <img 
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&fit=crop"
          width="650"
          height="650"
          alt="People enjoying various hobbies and activities"
          className="illustration-image"
        />
      </div>
    </section>
  )
}

export default HeroSection
