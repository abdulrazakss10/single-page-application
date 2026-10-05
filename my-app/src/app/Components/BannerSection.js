import React from 'react'
import BannerForm from './BannerForm'
import Navbar from './NavBar'

function BannerSection({
    title = "Tristique ultrices. Nam tempor, augu",
    showForm = true,
    pageType = "home"
}) {
    return (
        <div
            className="relative text-white"
            style={{
                backgroundImage: "url('/asstes/Images/header/header-2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '60vh',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative z-10">
                <Navbar pageType={pageType} />
            </div>
            <div className={`relative z-0 flex flex-col ${showForm ? 'lg:flex-row' : ''} items-center justify-between px-4 sm:px-6 lg:px-8 mt-12 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] gap-8`}>
                <div className={`max-w-2xl ${showForm ? 'flex-1' : 'w-full'} text-center ${showForm ? 'lg:text-left' : ''}`}>
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-[3rem] mb-6 lg:mb-8">
                        {title}
                    </h1>
                </div>
                {showForm && (
                    <div className="z-0 flex-shrink-0 w-full max-w-md lg:max-w-none lg:w-auto">
                        <BannerForm />
                    </div>
                )}
            </div>
        </div>
    )
}

export default BannerSection