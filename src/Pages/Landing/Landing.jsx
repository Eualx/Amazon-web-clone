import React from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel  from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import Footer from '../../components/Footer/Footer'
function Landing() {
  return (
    <Layout>

   <Carousel />
   <Category />
   <Product/> 
   <Footer />


    </Layout>
  )
}

export default Landing