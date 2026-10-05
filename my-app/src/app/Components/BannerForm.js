import React from 'react'

function BannerForm() {
    return (
        <div className="bg-white text-gray-800 p-4 sm:p-6 rounded-t-lg w-full max-w-sm mx-auto lg:mx-0 lg:w-80">
            <h3 className="text-base sm:text-lg font-semibold text-[#323F73] mb-4 text-center lg:text-left">
                Request a free call back
            </h3>
            <div className="space-y-3 sm:space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:border-[#323F73] focus:ring-1 focus:ring-[#323F73] transition-colors"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:border-[#323F73] focus:ring-1 focus:ring-[#323F73] transition-colors"
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:border-[#323F73] focus:ring-1 focus:ring-[#323F73] transition-colors"
                />
                <textarea
                    placeholder="Case Description..."
                    rows="3"
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:border-[#323F73] focus:ring-1 focus:ring-[#323F73] resize-none transition-colors"
                ></textarea>
                <button
                    type="button"
                    className="w-full bg-[#323F73] text-white py-2 sm:py-3 rounded font-medium hover:bg-[#2a3464] transition-colors text-sm sm:text-base"
                >
                    Request call back
                </button>
            </div>
        </div>
    )
}

export default BannerForm