import React from 'react'
// import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';

const Cart = () => {
  // const productData = useSelector((state) => state.guruline.productData)
  // console.log(productData);


  return (
    <div>
      <img
        className='w-full h-60 object-cover' 
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compressed" 
        alt="cartImg" />
       
       <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{' '}
              <span className='font-titleFont font-bold text-lg'>
                $200
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{' '}
              <span className='font-titleFont font-bold text-lg'>
                The shipping cost for this product is free
              </span>
            </p>
            <p className='font-titleFont font-semibold flex justify-between mt-6'>
              Total <span className='text-xl font-bold'>$200</span>
            </p>
            <button className='bg-black text-base text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 rounded'>
              proceed to checkout
            </button>
          </div> 
        </div>
       </div>

    </div>
  );
};

export default Cart