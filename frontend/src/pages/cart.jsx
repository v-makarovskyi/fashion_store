//scss path file: frontend/public/assets/scss/layout/ecommerce/_cart.scss

import React from 'react'
import SEO from '@/components/seo'
import Header from '@/layout/headers/header'
import Footer from '@/layout/footers/footer'
import Wrapper from '@/layout/wrapper'
import CartArea from '@/components/cart-wishlist/cart-area'
import CommonBreadcrumb from '@/components/cart-wishlist/breadcrumb/common-breadcrumb'

const Cart = () => {
  return (
    <Wrapper>
        <SEO pageTitle='cartPage'/>
        <Header /> 
        <CommonBreadcrumb title='Shoping Cart' subtitle='Shoping Cart' />
        <CartArea />
        <Footer /> 
    </Wrapper>
  )
}

export default Cart