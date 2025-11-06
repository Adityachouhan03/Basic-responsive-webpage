import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Your <span className="purple-text">Hobby</span>, Your <span className="cyan-text">Community</span>...
        </h1>
        <button className="get-started-btn">Get started</button>
      </div>
      
      <div className="hero-illustrations">
        <div className="illustration-grid">
          <img 
            src="https://images.pexels.com/photos/5890294/pexels-photo-5890294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Group of smiling adults holding yoga mats, embracing fitness and wellness indoors."
            width="972"
            height="650"
            className="illustration-item"
          />
          <img 
            src="https://images.pexels.com/photos/5158805/pexels-photo-5158805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Two young men with skateboards at a waterfront, showcasing an urban lifestyle."
            width="433"
            height="650"
            className="illustration-item"
          />
          <img 
            src="https://images.pexels.com/photos/7915302/pexels-photo-7915302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Two young men enjoying video games in an indoor arcade setting, highlighting diversity and friendship."
            width="975"
            height="650"
            className="illustration-item"
          />
          <img 
            src="https://images.pexels.com/photos/7606217/pexels-photo-7606217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="A woman indoors holding a vibrant food map craft, showcasing culinary diversity."
            width="975"
            height="650"
            className="illustration-item"
          />
          <img 
            src="https://images.pexels.com/photos/12161803/pexels-photo-12161803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="Vibrant mural depicting diverse activities in a lush urban park."
            width="1219"
            height="650"
            className="illustration-item"
          />
          <img 
            src="https://images.pexels.com/photos/8506422/pexels-photo-8506422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            alt="A young boy in animal pajamas creatively drawing with markers on paper indoors."
            width="433"
            height="650"
            className="illustration-item"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
