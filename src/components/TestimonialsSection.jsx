import React from 'react'
import './TestimonialsSection.css'

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="section-header">
        <div className="icon-wrapper">
          <svg className="testimonial-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <h2>Testimonials</h2>
      </div>
      
      <p className="testimonial-text">
        It is fast growing and ever changing city like bangalore, it sometimes becomes very difficult to find or connect with like 
        minded people. Websites like hobbyspo.com is a great service which helps me get in touch with, communicate, connect and 
        exchange ideas with other persons. It also provides the extra benefit of finding products and services that can help which I 
        can use for my hobbies. I would definitely recommend this website to people of the city who are constantly in search of 
        like minded people to get visibility and to be able to enjoy various activities/hobbies and socialise in the city of bangalore and 
        connect, play and highly recommend it.
      </p>
      
      <div className="testimonial-avatars">
        <div className="avatar">
          <img 
            src="https://images.pexels.com/photos/34598340/pexels-photo-34598340.jpeg?auto=compress&cs=tinysrgb&h=350" 
            alt="User testimonial"
            width="280"
            height="350"
          />
        </div>
        <div className="avatar-with-name">
          <img 
            src="https://images.pexels.com/photos/34595723/pexels-photo-34595723.jpeg?auto=compress&cs=tinysrgb&h=350" 
            alt="Shubha Ranganathan"
            width="233"
            height="350"
          />
          <div className="avatar-info">
            <div className="avatar-name">Shubha Ranganathan</div>
            <div className="avatar-title">Product Owner</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection