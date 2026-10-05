import React from 'react'
import TopBar from './Topbar'
import BannerSection from './BannerSection'

function Header({
    title = "Tristique ultrices. Nam tempor, augu",
    showForm = true,
    pageType = "home"
}) {
    return (
        <div className="">
            <TopBar />
            <BannerSection
                title={title}
                showForm={showForm}
                pageType={pageType}
            />
        </div>
    )
}
export default Header