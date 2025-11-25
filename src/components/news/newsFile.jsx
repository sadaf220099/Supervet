import React from 'react'
import backgroundImg from '../../assets/images/background.png'
import buicon from '../../assets/icons/buicon.svg'
import line from '../../assets/images/line.png'

function newsFile({ news }) {
    return (
        <div
            className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${news.backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className="absolute inset-0 flex flex-col text-center p-6 md:p-8">

                <h2
                    className="text-3xl font-semibold text-[#FFC810] mb-4 px-4 py-2 rounded"
                    style={{
                        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.14) 0%, #8F8888 48.34%, rgba(0, 0, 0, 0.00) 100%)',
                        fontFamily: 'Rajdhani, sans-serif'
                    }}
                >
                    {news.title}
                </h2>


                <div className="flex-1 flex flex-col justify-center pb-1">
                    <p className="text-[#C5C3BD] text-base font-normal md:text-base leading-relaxed mb-4 text-center mt-20" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {news.description}
                    </p>
                    <div className="flex justify-between items-start mb-6 px-4">
                        <div className="flex-1"></div>
                        <div className="flex flex-col space-y-2 flex-1 text-right">
                            <p className="text-[#C5C3BD] text-xs md:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                {news.shortDescription}
                            </p>
                            <p className="text-[#C5C3BD] text-xs" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                {news.shortDescription2}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div className="relative">
                            <img src={buicon} alt="Example" className="block" />
                            <p className="absolute inset-0 flex items-center justify-center text-black text-[16px] font-medium" style={{ fontFamily: 'GlaiveLocal' }}>
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
