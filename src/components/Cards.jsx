import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>About VanPetro</h2>
      <p>Welcome to Vancouver Petrographics Ltd., a trusted name in the field of geoscience and petrographic services since 1972.</p> 
      
      <p>With a rich heritage spanning over five decades, we have been the go-to choice for geoscientists and industry leaders seeking unparalleled technical expertise and professional services. Our commitment to excellence has solidified our position as a leading provider in the industry.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='..'
              label='..'
              path='/services'
            />
            <CardItem
              src='images/img-2.png'
              text='..'
              label='..'
              path='/services'
            />
            <CardItem
              src='images/img-3.png'
              text='..'
              label='..'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.png'
              text='..'
              label='..'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='..'
              label='..'
              path='/products'
            />
            <CardItem
              src='images/img-2.png'
              text='..'
              label='..'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
