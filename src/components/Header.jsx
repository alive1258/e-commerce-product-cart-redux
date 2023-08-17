import React from 'react'
import { useSelector } from 'react-redux'
import logoPic from '../../public/images/logo.png'

export default function Header({ setIsCartPage }) {

  const carts = useSelector(state => state.carts);
  const cartItem = carts.reduce((totalItem, item) => item.cartQuantity + totalItem, 0)

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="bg-[#171C2A] py-4 px-6">
        <div className="navBar">
          <a onClick={() => setIsCartPage(false)} href="#">
            <img src={logoPic} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a onClick={() => setIsCartPage(false)} href="#" className="navHome" id="lws-home"> Home </a>
            <a onClick={() => setIsCartPage(true)} href="#" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cartItem}</span>
            </a>

          </div>

        </div>

      </nav>
    </>
  )
}
