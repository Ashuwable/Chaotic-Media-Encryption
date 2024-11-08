import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Secure Media Transfer with Advanced Encryption</h1>
        <p>Our encryption services ensure that your media files are securely transferred and protected from unauthorized access. With cutting-edge technology, we provide peace of mind for all your media transfer needs.</p>
        <button className='button'>Encrypt</button>
        <button className='button'>Decrypt</button>
        {/* <footer className="button">
          <button className="button">Send</button>
          <button className="button">Receive</button>
        </footer> */}
      </div>
    </div>
  )
}

export default Hero
