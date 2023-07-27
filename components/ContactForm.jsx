'use client';
import React from 'react'
import { Buttons } from '@components/Buttons';
// Initialization for ES Users

function ContactForm() {
    return (

        <div className='contactForm flex-col '>
            <h1>CONTACT FORM</h1>

            <div className='contactForm-wrapper'>
                <div class="mb-4">
                    <input type="name" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter your full name.." required />
                </div>
                <div class="mb-4">
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <textarea id="form_message" rows="4" className="block p-2.5 mb-4 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 focus:ring-red-500 focus:border-red-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-900" placeholder="Please include a brief description of your required services..."></textarea>
                <Buttons className='btn' buttonStyle='btn--primary' buttonSize='btn--medium'>
                    SUBMIT
                </Buttons>
            </div>
        </div>
    )
}

export default ContactForm