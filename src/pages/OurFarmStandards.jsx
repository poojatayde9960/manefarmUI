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
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Title */}
            <div className="mb-12 text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-goodly leading-tight text-[#A9FF67]">
                    Our
                    <span className="block text-[#2D461D]">
                        <span className="text-[#A9FF67]">Farm</span> Standards
                    </span>
                </h2>
            </div>

            {/* Items */}
            <div className="space-y-8 sm:space-y-12">
                {standards.map((item, index) => (
                    <div
                        key={item.id}
                        className={`${item.highlight ? 'md:-ml-24 lg:-ml-32' : ''}`} // Only negative margin on md+
                    >
                        <div
                            className={`flex flex-col md:flex-row md:items-start gap-6 md:gap-16
    ${item.highlight
                                    ? 'bg-gradient-to-r from-[#2D461D] to-[#7BC259] text-white rounded-3xl p-6 sm:p-10 md:p-14 w-full md:w-auto md:ml-28'
                                    : 'bg-white p-6 sm:pl-8 w-full'
                                }`}
                        >

                            {/* ID + Title */}
                            <div className="flex items-center gap-4 sm:gap-6 min-w-[200px] md:min-w-[270px]">
                                <span className="text-4xl sm:text-5xl md:text-6xl text-[#A9FF67] -ml-1">
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
                                    className={`absolute top-0 bottom-0 w-1 bg-[#A9FF67] rounded-full ${index === 0 ? 'left-0' : 'left-2 sm:left-5'
                                        }`}
                                ></div>

                                <p
                                    className={`text-sm sm:text-base md:text-lg leading-relaxed ${item.highlight ? 'text-white pl-8 sm:pl-10 md:pl-10' : 'text-gray-700 pl-8 sm:pl-10 md:pl-16'
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        {index !== standards.length - 4 && (
                            <hr className="my-8 sm:my-12  border-[#2D461D]/20" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurFarmStandards
