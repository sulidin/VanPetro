import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Contact.css';

function Contact() {
  return (
    <>
        <div className='contact-container'>
          <div className="contact-btns">
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                  CONTACT US
              </Button>
          </div>
        </div>
    </>
  )
}

export default Contact