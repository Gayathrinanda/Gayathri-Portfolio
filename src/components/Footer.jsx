import React from 'react'
import Logo from '../assets/logo.svg'
import logoname1 from '../assets/logoname1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>
      
      {/* Footer Top */}
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        <Link to='/'>
          <img src={logoname1} alt="Logo" className='h-10 w-auto' />
        </Link>
        <div>
          <h5 className='font-medium mb-5'>Services</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li><a href="">Frontend Development</a></li>
            <li><a href="">UI / UX</a></li>
            <li><a href="">Web Development</a></li>
            <li><a href="">Branding</a></li>
          </ul>
        </div>
        <div>
          <h5 className='font-medium mb-5'>Accessibility</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>Mon - Fri: 9:00 - 5:00</li>
            <li>24/7 WhatsApp & Email</li>
          </ul>
        </div>
        <div>
          <h5 className='font-medium mb-5'>Contact</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>kgayathrinanda@gmail.com</li>
            <li>+91 9514178878</li>
          </ul>
        </div>
      </footer>

      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>

      {/* Footer Bottom */}
      <div className='main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center'>
        <div className='text-base lg:text-lg'>© 2025 Gayathrinanda | All rights reserved</div>
        <div className='flex gap-3 justify-center md:justify-end'>
          <a href="https://www.linkedin.com/in/gayathrinanda/">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.67481 6.25003C8.67447 6.91307 8.41076 7.54882 7.94169 8.01743C7.47261 8.48604 6.8366 8.74911 6.17356 8.74878C5.51051 8.74845 4.87476 8.48474 4.40615 8.01566C3.93755 7.54659 3.67447 6.91057 3.67481 6.24753C3.67514 5.58449 3.93885 4.94874 4.40792 4.48013C4.877 4.01152 5.51301 3.74845 6.17605 3.74878C6.8391 3.74911 7.47485 4.01282 7.94346 4.4819C8.41206 4.95097 8.67514 5.58699 8.67481 6.25003ZM8.74981 10.6H3.7498V26.25H8.74981V10.6ZM16.6498 10.6H11.6748V26.25H16.5998V18.0375C16.5998 13.4625 22.5623 13.0375 22.5623 18.0375V26.25H27.4998V16.3375C27.4998 8.62503 18.6748 8.91253 16.5998 12.7L16.6498 10.6Z" fill="white"/>
            </svg>
          </a>
          
        </div>
      </div>
    </>
  )
}

export default Footer