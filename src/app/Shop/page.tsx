 import React from 'react'
import ShopPage from './components/shoppage'
import Header from './components/header'
import IconList from './components/iconlist'
import Footer from '../components/Footer'
import FeaturedProducts from './components/shopproducts'
import Pagination from './components/pagination'
 
 const page = () => {
   return (
     <div>
      <Header/>
      <ShopPage/>
      <IconList/>
      <Footer/>
      <FeaturedProducts/>
      <Pagination/>
     </div>
   )
 }
 
 export default page
 