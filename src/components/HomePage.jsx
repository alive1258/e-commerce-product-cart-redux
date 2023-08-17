import React from 'react'
import { useSelector } from 'react-redux'
import Product from './productsPage/Product'
import InputForm from './productsPage/InputForm'

export default function HomePage() {
  const products = useSelector(state => state.products)
  return (
    <>
      <div className="productWrapper">
        <div className="productContainer pt-4" id="lws-productContainer">
          {
            products.length >= 1 ? products.map(item => <Product
              key={item.id}
              product={item}
            />)
              :
              "No Product Found"
          }

        </div>
       <div className='pt-4'>
       <InputForm />
       </div>

      </div>

    </>
  )
}
