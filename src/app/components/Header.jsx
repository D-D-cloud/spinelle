import React from 'react'
import Logo from '../../../public/images/logo.png'
import Image from 'next/image'
import Cart from '../../../public/images/cart.png'
import WishList from '../../../public/images/wishlist.png'
import NavBar from './Navbar'

const Header = () => {
  return (
    <>
    <div className='flex flex-row justify-between items-center px-20 py-8 border'>

      <Image
        src={Logo}
        className='w-[100px]'
      />

      <input type='text' placeholder='Search For Jewellery' className='border border-black px-20 py-3' />

      <div className='flex flex-row items-center'>
        <Image
          src={WishList}
          className='w-20 h-10 pr-10'
        />
        <Image
          className='w-10 h-10'
          src={Cart}
        />

      </div>

    </div>
    <NavBar />
    </>
  )
}

export default Header
