"use client";

export default function Footer() {
    return (
        <footer className="bg-[#323F73] text-white">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-12">

                        <div>
                            <div className="mb-6">
                                <img src="/asstes/logos/mainlogo.png" alt="logo" />
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-6">Contact</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <img src="/asstes/logos/Footer/email.png" alt="email" />
                                        <span>info@homelew.co.uk</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <img src="/asstes/logos/Footer/call.png" alt="call" />
                                        <span>01234567890</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <img src="/asstes/logos/Footer/map.png" alt="map" />
                                        <span>21XYZ St, XY CITY, X</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-3">
                                <a href="#" className="w-10 h-10 bg-white text-slate-700 rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <img src="/asstes/logos/Footer/fb.png" alt="facebook" />
                                </a>

                                <a href="#" className="w-10 h-10 bg-white text-slate-700 rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <img src="/asstes/logos/Footer/x.png" alt="xIcon" />
                                </a>

                                <a href="#" className="w-10 h-10 bg-white text-slate-700 rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <img src="/asstes/logos/Footer/linked.png" alt="linked" />
                                </a>

                                <a href="#" className="w-10 h-10 bg-white text-slate-700 rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
                                    <img src="/asstes/logos/Footer/insta.png" alt="insta" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6">Legal Stuff</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem Ipsum</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem Ipsum</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative z-10 bg-[#323F73] bg-opacity-90">
                        <div className="max-w-7xl mx-auto px-6 py-8">
                            <div className="text-gray-300 text-sm leading-relaxed text-center">
                                <p>
                                    Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className="bg-[#323F73] py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © 2025 - Homelew
                    </p>
                </div>
            </div>
        </footer>
    );
}