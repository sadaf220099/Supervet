import React from 'react'
import buicon from '../../assets/icons/buicon.svg'

function newsFile({ news }) {
    return (
        <div
            className="relative w-full h-[600px] sm:h-[500px] xs:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${news.backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 flex flex-col text-center p-1 md:p-3">

                {/* Title */}
                <h2
                    className="text-3xl sm:text-2xl xs:text-xl font-semibold text-[#FFC810] mb-4 py-2 rounded"
                    style={{
                        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.14) 0%, #8F8888 48.34%, rgba(0, 0, 0, 0.00) 100%)',
                        fontFamily: 'Rajdhani, sans-serif'
                    }}
                >
                    {news.title}
                </h2>

                <div className="flex-1 flex flex-col justify-center pb-1">

                    {/* Description */}
                    <p className="text-[#C5C3BD] text-base sm:text-sm xs:text-xs leading-relaxed mb-4 text-center mt-20 sm:mt-16 xs:mt-12" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {news.description}
                    </p>

                    {/* Short descriptions */}
                    <div className="flex justify-between items-start mb-6 p-4 sm:p-3 xs:p-2">
                        <div className="flex-1"></div>
                        <div className="flex flex-col space-y-2 flex-1 text-right">
                            <p className="text-[#C5C3BD] text-xs sm:text-[10px]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                {news.shortDescription}
                            </p>
                            <p className="text-[#C5C3BD] text-xs sm:text-[10px]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                {news.shortDescription2}
                            </p>
                        </div>
                    </div>

                    {/* Read More Button (UNCHANGED) */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <img src={buicon} alt="Example" className="block" />
                            <p
                                className="absolute inset-0 flex items-center justify-center text-black text-[16px] font-medium"
                                style={{ fontFamily: 'GlaiveLocal' }}
                            >
                                Read More
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default newsFile
