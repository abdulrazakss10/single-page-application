'use client';
import Image from 'next/image';

const features = [
    {
        icon: "/asstes/logos/SecondSection/Vector.png",
        title: "The Foodie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        linkText: "Lorem Ipsum ksdhsik",
    },
    {
        icon: "/asstes/logos/SecondSection/office.png",
        title: "The Office Goto",
        description: "Duis aute irure dolor in reprehenderit in voluptate",
        linkText: "Lorem Ipsum ksdhsik",
    },
    {
        icon: "/asstes/logos/SecondSection/gallery.png",
        title: "The Collaboration Junkie",
        description: "Duis aute irure dolor in reprehenderit in voluptate",
        linkText: "Lorem Ipsum ksdhsik",
    },
    {
        icon: "/asstes/logos/SecondSection/Agent.png",
        title: "The Change Agent",
        description: "Excepteur sint occaecat cupidatat",
        linkText: "Plan for Peace of Mind",
    },
    {
        icon: "/asstes/logos/SecondSection/detective.png",
        title: "The Detective",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        linkText: "Lorem Ipsum ksdhsik",
    },
];

export default function LoremIpsumSection() {
    return (
        <section className="bg-white py-16 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#323F73] mb-10">Lorem Ipsum</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 w-full max-w-xs hover:shadow-md transition"
                    >
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={42}
                                height={42}
                                className="w-16 h-16 object-scale-down"
                            />
                        </div>
                        <h3 className="text-[#323F73] font-bold mb-2 whitespace-nowrap">{feature.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 italic">{feature.description}</p>
                        <a href="#" className="text-sm text-[#323F73] font-bold hover:underline">
                            {feature.linkText}
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <button className="bg-[#323F73] text-white px-6 py-2 rounded hover:bg-[#1f2a53]">
                    Find Out More
                </button>
            </div>
        </section>
    );
}