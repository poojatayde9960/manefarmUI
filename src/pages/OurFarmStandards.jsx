import React from 'react'

const standards = [
    {
        id: '01',
        title: 'Veterinary Care',
        description:
            'Regular veterinary checkups every 15 days, with immediate medical attention for any health concerns. All treatments and health updates are fully documented for investor transparency.',
        highlight: true,
    },
    {
        id: '02',
        title: 'Quality Nutrition',
        description:
            'Buffaloes receive high-quality fodder, balanced feed blends, and clean drinking water. Every animal follows a customized nutrition plan designed to maximize health and milk yield.',
        highlight: false,
    },
    {
        id: '03',
        title: 'Individual Records',
        description:
            'Each buffalo maintains a complete health profile, including medical history, yield tracking, vaccinations, and treatment logs all accessible to investors at any time.',
        highlight: false,
    },
    {
        id: '04',
        title: 'Insurance Coverage',
        description:
            'All animals are covered under comprehensive insurance, including mortality, accidents, and major health conditions, ensuring strong risk protection for investors.',
        highlight: false,
    },
]

const OurFarmStandards = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
            {/* Title */}
            <div className="mb-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-goodly font-medium leading-tight text-[#A9FF67]">
                    Our
                    <span className="block text-[#2D461D]">
                        <span className="text-[#A9FF67]">Farm</span> Standards
                    </span>
                </h2>

                <h2 className="mt-6 lg:mt-10 max-w-full lg:max-w-md text-base sm:text-lg font-manrope font-semibold leading-relaxed text-[#2D461D]">
                    Our commitment to excellence in animal <br />
                    welfare and transparent farm <br />
                    management
                </h2>
            </div>

            {/* Items */}
            <div className="space-y-8 sm:space-y-10">
                {standards.map((item, index) => (
                    <div key={item.id}>
                        <div
                            className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-12
                            ${item.highlight
                                    ? 'bg-gradient-to-r from-[#2D461D] to-[#7BC259] text-white rounded-3xl p-6 sm:p-8 md:p-10 w-full md:w-auto md:ml-0'
                                    : 'bg-white p-4 sm:p-6 md:p-8 w-full'
                                }`}
                        >
                            {/* ID + Title */}
                            <div className="flex items-center gap-3 sm:gap-4 min-w-[180px] md:min-w-[250px]">
                                <span className="text-3xl sm:text-4xl md:text-5xl text-[#A9FF67] -ml-1">
                                    {item.id}
                                </span>
                                <span className={`text-lg sm:text-xl md:text-xl ${item.highlight ? 'text-white' : 'text-[#2D461D]'}`}>
                                    {item.title}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="relative flex-1">
                                {/* Vertical line */}
                                <div
                                    className={`absolute top-0 bottom-0 w-1 bg-[#A9FF67] rounded-full ${index === 0 ? 'left-0' : 'left-2 sm:left-4'} hidden md:block`}
                                ></div>

                                <p
                                    className={`text-sm sm:text-base md:text-lg leading-relaxed ${item.highlight ? 'text-white pl-0 md:pl-10' : 'text-gray-700 pl-0 md:pl-12'}`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        {index !== standards.length - 1 && (
                            <hr className="my-6 sm:my-8 border-[#2D461D]/20" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurFarmStandards
