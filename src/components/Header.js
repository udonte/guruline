import React from 'react';
import {LiaShoppingBagSolid} from 'react-icons/lia'
import Logo from './Logo';

const links = [
  {name: 'Home'},
  {name: 'Pages'},
  {name: 'Shop'},
  {name: 'Element'},
  {name: 'Blog'},
]

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Logo color={'white'} />
        <div className='flex items-center justify-center gap-6'>
          <ul className='flex items-end gap-8'>
            {
              links.map((link, i) => {
                return (
                  <li
                  key={i}
                  className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer'
                  >{link.name}</li>
                )
              })
            }
          </ul>
          <div className='relative'>
            <LiaShoppingBagSolid size={40} />
            <span className='absolute w-6 top-4 left-2 text-sm flex items-center justify-center font-semibold text-orange-900'>0</span>
          </div>
            <img
            className='w-8 h-8 rounded-full' 
            src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="userLogo" />
        </div>
      </div>
    </div>
  )
}

export default Header