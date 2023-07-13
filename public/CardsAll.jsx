import React from 'react'
import Card from './Card'
import './CardsAll.css'

function CardsAll() {
  return (
    <div className='cards'>
        <h2>okay</h2>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                   <Card 
                   src='images/img-2.png'
                   text='Explore the services'
                   label='Services'
                   path='/services'
                   />
                     <Card 
                   src='images/img-2.png'
                   text='Explore the services'
                   label='Services'
                   path='/services'
                   />
                     <Card 
                   src='images/img-2.png'
                   text='Explore the services'
                   label='Services'
                   path='/services'
                   />
                </ul>
                <ul className='cards-items'>
                   <Card 
                   src='images/img-2.png'
                   text='Explore the services'
                   label='Services'
                   path='/services'
                   />
                     <Card 
                   src='images/img-2.png'
                   text='Explore the services'
                   label='Services'
                   path='/services'
                   />
                     <Card 
                   src='images/img-2.png'
                   text='Explore the services'
                   label='Services'
                   path='/services'
                   />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CardsAll