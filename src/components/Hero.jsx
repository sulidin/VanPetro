import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>OVER 50 YEARS OF EXPERIENCE</h1>
        <p>Enabling Breakthroughs in Mining, Petroleum, and Scientific Research through VanPetro`s Unrivalled Experience</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                ORDER ONLINE
            </Button>
        </div>
    </div>
  )
}

export default Hero