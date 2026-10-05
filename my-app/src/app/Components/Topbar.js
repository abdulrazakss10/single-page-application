import React from 'react';

function TopBar() {
    return (
        <div className="bg-[#323F73] border-b-2 border-white px-4 sm:px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="p-2 lg:p-3">
                <img
                    src="/asstes/logos/mainlogo2.png"
                    alt="logo"
                    className=""
                />
            </div>

            <div className='text-white text-xs sm:text-sm flex flex-col lg:flex-row sm:flex-row md:flex-row items-center gap-4 lg:gap-6 text-center md:text-right sm:text-right'>
                <div>
                    <div className="font-medium">
                        <span className="block sm:inline">Open Hours: Mon - Thur 9am to 9pm</span>
                        <span className="hidden sm:inline"> | </span>
                        <span className="block sm:inline">Fri 9am to 5:30pm</span>
                    </div>
                    <div className="font-medium">Closed: Saturday - Sunday</div>
                </div>

                <div className="bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img
                            src="/asstes/logos/header/call.png"
                            alt="Call icon"
                            className="w-5 h-5"
                        />
                        <div className="flex flex-col text-left">
                            <span className="font-bold text-base sm:text-xs">01234567891</span>
                            <span className="text-xs opacity-90">Call Free now on</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
