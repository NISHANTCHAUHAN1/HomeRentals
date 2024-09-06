import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Listings from "../components/Listings"
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Listings />
      <Footer />
    </div>
  )
}

export default HomePage
