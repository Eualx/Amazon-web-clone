import React from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel  from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import Main from '../../components/Main/Main'


function Landing() {
  return (
    <Layout>
   <Carousel />
   <Category />
   <Product/> 
   <Main/>

    </Layout>
  )
}

export default Landing