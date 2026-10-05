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
    title: 'About Us - My App',
    description: 'Learn more about our company and mission',
}

export default function AboutPage() {
    return (
        <div>
            <Header
                title="About Our Company - Learn Our Story and Mission"
                showForm={false}
                pageType="about"
            />
            <LoremIpsumSection
                title="Our Company Story"
                subtitle="Discover how we became industry leaders"
            />
            <JobGridSection
                title="Our Team"
                subtitle="Meet the professionals behind our success"
            />
            <CourseGridSection
                title="Our Expertise Areas"
                subtitle="The skills and knowledge we bring to every project"
            />
            <ServiceCardsSection
                title="Why Choose Us"
                subtitle="The advantages of working with our experienced team"
            />
            <ContactHeroSection
                title="Ready to Work Together?"
                subtitle="Contact us to discuss how we can help your business grow"
            />
            <FAQSection
                title="Frequently Asked Questions About Us"
            />
            <Footer />
        </div>
    )
}