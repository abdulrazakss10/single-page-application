const services = [
    {
        title: "Ma Si-Hau's son",
        price: "£360",
        features: [
            "Senior Scientist",
            "Senior Chemist II",
            "Developmental Chemist",
            "Cosmetics Formulation Scientist",
            "Formulation Manager and TPL",
        ],
    },
    {
        title: "Gu er xing",
        price: "£360",
        features: [
            "Raw Materials Lab Coordinator",
            "Chemist",
            "Director of Formulations",
            "Chemist",
            "Senior Scientist",
        ],
    },
    {
        title: "The Hornet and the Firefly",
        price: "£360",
        features: [
            "Senior Chemist II",
            "Formulation Research/Development",
            "Chief Science Officer",
            "Chemist",
            "Cosmetics Formulation Scientist",
        ],
    },
    {
        title: "Alias the Scarf",
        price: "£360",
        features: [
            "Chemist",
            "Senior Scientist",
            "Deodorant Chemist",
            "Cosmetics Formulation Scientist",
            "Raw Materials Lab Coordinator",
        ],
    },
    {
        title: "The Green Hornet",
        price: "£360",
        features: [
            "Formulation Research/Development",
            "Deodorant Chemist",
            "Director of Formulations",
            "Chief Science Officer",
            "Formulation Chemist",
        ],
    },
    {
        title: "Wei lou chun xiao",
        price: "£360",
        features: [
            "Developmental Chemist",
            "Senior Chemist II",
            "Deodorant Chemist",
            "Director R&D Mascara",
            "Director of Formulations",
            "Director of Formulations",
        ],
    },
];


export default function ServiceCardsSection() {
    return (
        <section className="py-16 px-4 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#323F73] mb-12">Lorem Ipsum</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, index) => {
                    const isDark = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`rounded-lg p-6 flex flex-col justify-between min-h-[380px] shadow-xl ${isDark
                                ? "bg-[#323F73] text-white shadow-lg"
                                : "bg-white text-[#323F73] shadow-2xl"
                                }`}
                        >
                            <div>
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                <p className="font-semibold mb-4">
                                    From <span className="text-xl">£360*</span>
                                </p>
                                <ul className="text-sm list-disc list-inside space-y-3 text-left">
                                    {service.features.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className={`mt-6 px-6 py-2 rounded-full font-semibold transition mx-auto ${isDark
                                    ? "bg-white text-[#323F73] hover:bg-gray-200"
                                    : "bg-[#323F73] text-white hover:bg-[#1f2a53]"
                                    }`}
                            >
                                Find Out More
                            </button>

                        </div>


                    );
                })}
            </div>
        </section>
    );
}
