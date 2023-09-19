import React from 'react'

const Logo = ({color}) => {
  
  return (
    <div>
      {
        color ==='white' ? <p className='px-2 py-1 text-3xl font-extrabold text-gray-800 border-l-orange-900 border-l-[3px] border-b-orange-900 border-b-[3px] w-fit'> GuruLine</p> : <p className='px-2 py-1 text-3xl font-extrabold text-gray-100 border-l-orange-900 border-l-[3px] border-b-orange-900 border-b-[3px] w-fit'> GuruLine</p>
      }
    </div>
  )
}

export default Logo