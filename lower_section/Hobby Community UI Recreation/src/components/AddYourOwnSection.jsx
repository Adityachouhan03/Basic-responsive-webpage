import React from 'react'
import './AddYourOwnSection.css'

const AddYourOwnSection = () => {
  return (
    <section className="add-your-own-section">
      <div className="section-header">
        <div className="icon-wrapper">
          <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </div>
        <h2>Add your own</h2>
      </div>
      
      <p className="section-description">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should 
        be on 'hobbyspo'? Go ahead and Add your Own page!
      </p>
      
      <button className="add-new-btn">Add new</button>
    </section>
  )
}

export default AddYourOwnSection
