import React from 'react'
import Logo from './Logo'
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {BsPersonFill, BsPaypal} from 'react-icons/bs';


const Footer = () => {

  const footerLinks = [
    {
      name : 'My Account', 
      icon: <BsPersonFill />
    },
    {
      name : 'Checkout', 
      icon: <BsPaypal />
    },
    {
      name : 'Order Tracking', 
      icon: <MdLocationOn />
    },
    {
      name : 'Help & Support', 
      icon: <MdLocationOn />
    }
  ]

  return (
    <div 
      className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        
        <div className='flex flex-col gap-7'>
          <Logo />
          <div className='flex gap-5 text-lg text-gray-400'>
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer'  />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer'  />
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
          <div className='text-base flex flex-col gap-2'>
            <p>Birmingham, UK</p>
            <p>Mobile: +1 909 9909</p>
            <p>Email: guruline@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
          <div className='text-base flex flex-col gap-2'>
              {
                footerLinks.map((footerLink, i) => {
                  return(
                    <div key={i} className='flex flex-col gap-2 text-base'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> 
                        <span>{footerLink.icon}</span>
                        {footerLink.name}
                      </p>
                    </div>
                  )
                })
              }
            </div>
        </div>

        <div className='flex flex-col justify-start'>
          <input 
            type="text"
            className='bg-transparent border px-4 py-2 text-sm'
            placeholder='e-mail'
          />
          <button className='text-sm border text-white bg-orange-900 border-t-0 hover:bg-gray-900 active:bg-white active:text-black py-2'>Subscribe</button>
        </div>

      </div>
    </div>

  )
}

export default Footer