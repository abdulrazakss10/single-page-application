import React from 'react'
import Header from '../Components/Header'
import LoremIpsumSection from '../Components/LoremIpsum'
import JobGridSection from '../Components/JobGridSection'
import CourseGridSection from '../Components/CourseGridSection'
import ServiceCardsSection from '../Components/ServiceCardsSection'
import ContactHeroSection from '../Components/ContactHeroSection'
import FAQSection from '../Components/FAQSection'
import Footer from '../Components/Footer'

export const metadata = {
    title: 'Our Services - My App',
    description: 'Explore our comprehensive range of professional services',
}

export default function ServicesPage() {
    return (
        <div>
            <Header
                title="Our Professional Services - Comprehensive Solutions for Your Business"
                showForm={true}
                pageType="services"
            />
            <LoremIpsumSection
                title="Service Overview"
                subtitle="Comprehensive solutions tailored to your needs"
            />
            <ServiceCardsSection
                title="Our Service Categories"
                subtitle="Explore our specialized service offerings"
            />
            <JobGridSection
                title="Service Packages"
                subtitle="Choose the right package for your business needs"
            />
            <CourseGridSection
                title="Training & Development Services"
                subtitle="Enhance your team's skills with our professional courses"
            />
            <ContactHeroSection
                title="Need a Custom Solution?"
                subtitle="Get in touch for personalized service packages"
            />
            <FAQSection
                title="Service-Related Questions"
            />
            <Footer />
        </div>
    )
}