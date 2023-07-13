import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
     
          <h1>OVER 50 YEARS OF EXPERIENCE</h1>
          <h3>Enabling Breakthroughs in Mining, Petroleum, and Scientific Research through VanPetro`s Unrivalled Experience</h3>      
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                ORDER ONLINE
            </Button>
        </div>
    </div>
  )
}

export default Hero
