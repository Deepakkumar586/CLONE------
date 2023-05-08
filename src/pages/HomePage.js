import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/common/header'
import ProductShowcase from '../components/ProductShowcase'
import FeelSpecial from '../components/FeelSpecial'

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
    </>
  )
}

export default HomePage
