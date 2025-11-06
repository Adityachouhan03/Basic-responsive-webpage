import React, { useState } from 'react'
import './LoginForm.css'

function LoginForm() {
  const [activeTab, setActiveTab] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { email, password, type: activeTab })
  }

  return (
    <div className="login-form-container">
      <div className="login-tabs">
        <button 
          className={`tab-button ${activeTab === 'signin' ? 'active' : ''}`}
          onClick={() => setActiveTab('signin')}
        >
          Sign In
        </button>
        <button 
          className={`tab-button ${activeTab === 'joinin' ? 'active' : ''}`}
          onClick={() => setActiveTab('joinin')}
        >
          Join In
        </button>
      </div>

      <div className="login-form">
        <div className="social-buttons">
          <button className="social-btn google-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C15.24 23 17.95 21.92 19.28 20.34L15.71 17.57C14.74 18.22 13.48 18.62 12 18.62C8.87 18.62 6.22 16.68 5.35 13.98H1.64V16.83C2.96 19.45 7.24 23 12 23Z" fill="#34A853"/>
              <path d="M5.35 13.98C5.13 13.33 5 12.64 5 11.93C5 11.22 5.13 10.53 5.35 9.88V7.03H1.64C0.89 8.52 0.5 10.19 0.5 11.93C0.5 13.67 0.89 15.34 1.64 16.83L5.35 13.98Z" fill="#FBBC05"/>
              <path d="M12 5.24C13.62 5.24 15.06 5.81 16.18 6.88L19.39 3.67C17.95 2.32 15.24 1.5 12 1.5C7.24 1.5 2.96 4.55 1.64 7.17L5.35 10.02C6.22 7.32 8.87 5.24 12 5.24Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <button className="social-btn facebook-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.564H7.078V12.073H10.125V9.405C10.125 6.348 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.34 7.875 13.875 8.8 13.875 9.75V12.073H17.203L16.671 15.564H13.875V24C19.612 23.094 24 18.1 24 12.073Z" fill="#1877F2"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        <div className="divider">
          <span>Or connect with</span>
        </div>

        <form onSubmit={handleSubmit} className="email-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
            <div className="password-options">
              <div className="password-strength">
                <div className="strength-bar">
                  <div className="strength-fill"></div>
                </div>
              </div>
              <button type="button" className="forgot-password">
                Password strength
              </button>
            </div>
          </div>

          <div className="form-footer">
            <p className="terms-text">
              By continuing, you agree to our <a href="#" className="link">Terms of Service</a> and <a href="#" className="link">Privacy Policy</a>.
            </p>

            <button type="submit" className="submit-btn">
              Agree and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
