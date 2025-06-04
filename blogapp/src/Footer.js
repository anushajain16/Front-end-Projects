import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='content'>
        <div className='info'>
          <div className='about'>
            <p className='content-head'>About</p>
            <p className='info-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          
          <div className='contact'>
            <a href="mailto:anusha.j@ahduni.edu.in" style={{ fontSize: 16 }}>
              anusha.j@ahduni.edu.in
            </a>
            <a href="tel:+917575876547" style={{ fontSize: 16 }}>+91 7575876547</a>
          </div>
        </div>
        
        <div className='link'>
          <div className='quick-link'>
            <ul> <span className='content-head'>Quick Link</span>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/post"> Blog </Link></li>
              <li><Link to="/post/:id">Post</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className='link-category'>
            <ul> <span className='content-head'>Category</span>
              <li><Link to="/">Technology</Link></li>
              <li><Link to="/post">Entertainment</Link></li>
              <li><Link to="/post/:id">Education</Link></li>
              <li><Link to="/about">Business</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
