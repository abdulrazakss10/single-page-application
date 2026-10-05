'use client';

import Image from 'next/image';

const courses = [
    {
        title: "CBS News Specials",
        code: "[HIS 392]",
        subtitle: "Civil War: Union In Crisis",
        image: "/asstes/Images/FourthSection/first.png",
    },
    {
        title: "CBS Sunday Morning",
        code: "[CTE 550]",
        subtitle: "Grant Writing",
        image: "/asstes/Images/FourthSection/second.png",
    },
    {
        title: "The Takeout",
        code: "[PRM 300]",
        subtitle: "Contemporary Developments",
        image: "/asstes/Images/FourthSection/third.png",
    },
    {
        title: "The FBI Declassified",
        code: "[ENG 530]",
        subtitle: "Pro Environmental Writing",
        image: "/asstes/Images/FourthSection/fourth.png",
    },
    {
        title: "48 Hours",
        code: "[FOR 360]",
        subtitle: "Foods Of The Us",
        image: "/asstes/Images/FourthSection/fifth.png",
    },
];

export default function CourseGridSection() {
    return (
        <section className="py-16 px-4 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#323F73] mb-12">Lorem Ipsum</h2>

            <div className="flex justify-center flex-wrap gap-8 mb-10">
                {courses.slice(0, 3).map((course, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-6 w-[300px] text-center hover:shadow-md transition"
                    >
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={128}
                                height={128}
                                className="w-32 h-32 object-contain"
                            />
                        </div>
                        <h3 className="text-[#323F73] font-bold text-lg">{course.title}</h3>
                        <p className="italic text-sm text-gray-600 mt-2">
                            {course.code}
                            <span className="italic"> {course.subtitle}</span>
                        </p>
                        <button className="mt-6 bg-[#323F73] text-white font-semibold px-6 py-2 rounded hover:bg-[#1f2a53]">
                            Find Out More
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
                {courses.slice(3).map((course, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-6 w-[300px] text-center hover:shadow-md transition"
                    >
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={128}
                                height={128}
                                className="w-32 h-32 object-contain"
                            />
                        </div>
                        <h3 className="text-[#323F73] font-bold text-lg">{course.title}</h3>
                        <p className="italic text-sm text-gray-600 mt-2">
                            {course.code}
                            <span className="not-italic"> {course.subtitle}</span>
                        </p>
                        <button className="mt-6 bg-[#323F73] text-white font-semibold px-6 py-2 rounded hover:bg-[#1f2a53]">
                            Find Out More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}