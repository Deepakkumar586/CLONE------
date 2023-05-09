import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/common/header'
import ProductShowcase from '../components/ProductShowcase'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
import BrandsLove from '../components/BrandsLove'
import WindowPeak from '../components/WindowPeak'
import MobileScroll from '../components/MobileScroll'

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />

      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className='non-mobile'>
        <WindowPeak />
      </div>

      <CredSecurity />

    </>
  )
}

export default HomePage
