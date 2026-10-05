'use client';

import Image from 'next/image';

const jobs = [
    { icon: "/asstes/logos/ThirdSection/alerm.png", title: "Scrum Master" },
    { icon: "/asstes/logos/ThirdSection/developer.png", title: "Software Developer" },
    { icon: "/asstes/logos/ThirdSection/design.png", title: "UI/UX Designer" },
    { icon: "/asstes/logos/ThirdSection/project.png", title: "Project Manager" },
    { icon: "/asstes/logos/ThirdSection/nursing.png", title: "Nursing Assistant" },
    { icon: "/asstes/logos/ThirdSection/trainer.png", title: "Dog Trainer" },
    { icon: "/asstes/logos/ThirdSection/medical.png", title: "Medical Assistant" },
    { icon: "/asstes/logos/ThirdSection/markting.png", title: "Marketing Coordinator" },
];

export default function JobGridSection() {
    return (
        <section className="py-16 px-4 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#323F73] mb-12">
                Donec a eros justotial Donec a eros justo
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {jobs.map((job, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-4">
                        <div className="bg-[#323F73] w-16 h-16 rounded-full flex items-center justify-center p-3">
                            <Image
                                src={job.icon}
                                alt={job.title}
                                width={22}
                                height={22}
                                className="w-10 h-10 object-scale-down filter brightness-0 invert"
                            />
                        </div>
                        <p className="text-[#554149] font-bold text-sm md:text-base">{job.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}