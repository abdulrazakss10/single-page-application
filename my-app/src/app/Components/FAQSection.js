"use client";

import { useState } from 'react';

export default function FAQSection() {
    const [openItems, setOpenItems] = useState({});

    const faqItems = [
        {
            id: 1,
            question: "Traveling to the Happiest Country in the World!",
            answer: "Denmark consistently ranks as one of the happiest countries in the world. Known for its hygge culture, beautiful Copenhagen, fairy-tale castles, and friendly locals, Denmark offers visitors a perfect blend of modern design and historic charm. From cycling through Copenhagen's colorful streets to exploring Viking history, Denmark provides an unforgettable travel experience."
        },
        {
            id: 2,
            question: "10 Best Places to Visit in Canada",
            answer: "Canada offers incredible diversity from coast to coast. Top destinations include: Vancouver's stunning waterfront, Toronto's vibrant city life, the majestic Canadian Rockies in Banff and Jasper, Quebec City's European charm, Niagara Falls' natural wonder, the Northern Lights in Yukon, Prince Edward Island's coastal beauty, Montreal's cultural scene, the wine regions of Ontario, and the maritime provinces' rugged coastlines."
        },
        {
            id: 3,
            question: "Traveling to the Least Visited Country in the World",
            answer: "Tuvalu, a small island nation in the Pacific Ocean, is often considered one of the least visited countries in the world, receiving fewer than 2,000 tourists annually. This remote paradise offers pristine beaches, crystal-clear waters, and a unique Polynesian culture. The country faces challenges from climate change, making it both a rare travel destination and an important place to witness environmental impacts firsthand."
        }
    ];

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#323F73] mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4 mb-12">
                    {faqItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                            >
                                <span className="text-lg font-bold text-[#323F73] pr-4">
                                    {item.question}
                                </span>
                                <div className="flex-shrink-0">
                                    <div className={`w-5 h-5 transform transition-transform duration-200 ${openItems[item.id] ? 'rotate-180' : ''}`}>
                                        <svg className="w-full h-full text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>

                            {openItems[item.id] && (
                                <div className="px-6 pb-4">
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3 border-2 border-[#323F73] text-[#323F73] rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 min-w-48">
                        See more FAQs
                    </button>
                    <button className="px-8 py-3 bg-[#323F73] text-white rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 min-w-48">
                        Read more in our Blogs
                    </button>
                </div>
            </div>
        </div>
    );
}