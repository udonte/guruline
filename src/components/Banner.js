import React, {useState} from 'react'
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'
import { imagesData } from '../data'




const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const prevSlide = () => {
    // If currentSlide is 0, set it to 3, otherwise decrement it by 1
    setcurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };
  
  const nextSlide = () => {
    // If currentSlide is 3, set it to 0, otherwise increment it by 1
    setcurrentSlide((prev ) => (prev === 3 ? 0 : prev + 1));
  };
  console.log(currentSlide);   

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div style={{transform: `translateX(-${currentSlide * 100}vw)` }} className='w-[400vw] h-full flex transition-transform duration-500'>
          {
            imagesData.map((image, i) => {
              return (
                <img 
                  key={i}
                  className='w-screen h-full object-cover'
                  src={image} 
                  alt={'banner' + i}
                  loading='priority'
                />
              )
            })
          }
        </div>

        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowLeft />     
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowRight />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner