import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4 py-6'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>shopping everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
        Discover the world of endless possibilities. Explore a curated collection of the latest trends and timeless classics. From fashion to electronics, home decor to beauty essentials, we have it all just for you!
        </p>
      </div>

      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
       {
        products.map((item, i) => {
          return (
            <ProductsCard key={item._id} product={item} />
          )
        })
       }
      </div>
    </div>
  )
}

export default Products