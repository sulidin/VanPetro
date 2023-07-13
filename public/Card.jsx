import React from 'react'
import { Link } from 'react-router-dom'
import './CardsAll.css'

function Card(props) {
  return (
    <>
    <li className='cards-item'>
        <Link className='cards-item-link' to={props.path}>
            <figure className='cards-item-pic-wrap' data-category ={props.label}>
                <figure className='cards-item-img' alt='Travel Image'>
                    <img src={props.src} alt="" />
                </figure>
                <div className='cards-item-info'>
                    <h5 className='cards-item-text'>{props.text}</h5>
                </div>
            </figure>
        </Link>
    </li>
    </>
  )
}

export default Card