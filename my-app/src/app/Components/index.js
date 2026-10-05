import React from 'react'
import Header from './Header'
import LoremIpsumSection from './LoremIpsum'
import JobGridSection from './JobGridSection'
import CourseGridSection from './CourseGridSection'
import ServiceCardsSection from './ServiceCardsSection'
import ContactHeroSection from './ContactHeroSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

function HomePage() {
  return (
    <div>
      <Header />
      <LoremIpsumSection />
      <JobGridSection />
      <CourseGridSection />
      <ServiceCardsSection />
      <ContactHeroSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default HomePage