export default function ContactHeroSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/asstes/Images/fifthSection/backgrounding.png')" }}
        >

            <div className="">
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between text-white">


                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempo
                        </h2>
                        <p className="mb-4">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue ?
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue ?
                        </p>
                        <ul className="list-disc list-inside text-white space-y-1">
                            <li>Donec a eros justo. Fusce egestas</li>
                            <li>Tristique ultrices. Nam tempor, augu</li>
                        </ul>
                    </div>

                    <div className="bg-white text-[#323F73] rounded-xl shadow-lg p-8 w-full max-w-sm mt-12 md:mt-0 md:ml-10">
                        <h3 className="text-lg font-semibold mb-6 text-center">Get in touch Team</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-[#323F73]"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-[#323F73]"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-[#323F73]"
                            />
                            <textarea
                                placeholder="Your Enquiry"
                                rows={3}
                                className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-[#323F73]"
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#323F73] text-white py-2 rounded mt-2 hover:bg-[#1f2a53]"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
