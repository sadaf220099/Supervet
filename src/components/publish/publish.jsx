import React from 'react'
import redline from '../../assets/images/redline.png'
import secure1 from '../../assets/images/secure1.png'
import secure2 from '../../assets/images/secure2.png'
import publish from '../../assets/icons/publish.svg'
import pub1 from '../../assets/images/pub1.png'
import pub2 from '../../assets/images/pub2.png'
import pub3 from '../../assets/images/pub3.png'
import tech1 from '../../assets/images/tech1.png'
import tech2 from '../../assets/images/tech2.png'
import tech3 from '../../assets/images/tech3.png'
import tech4 from '../../assets/images/tech4.png'
import tech5 from '../../assets/images/tech5.png'
import tech6 from '../../assets/images/tech6.png'

function Publish() {
    return (
        <section className="w-screen min-h-screen bg-black flex items-center justify-center relative px-4 py-10">
            <div className="top-0 w-full absolute">
                <img src={redline} alt="" className="w-full" />
            </div>

            {/* Main responsive wrapper */}
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">

                {/* LEFT SECTION */}
                <div className="mb-0 flex flex-col items-center">
                    <div className="relative w-48 h-24 sm:w-56 sm:h-28 lg:w-64 lg:h-32">
                        <img src={publish} className="w-full h-full object-contain" />
                        <p className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-[36px] font-normal"
                            style={{ fontFamily: 'GlaiveLocal' }}>
                            WATCH TAILOR
                        </p>
                    </div>

                    <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16">
                        <div
                            className="border-2 border-solid rounded-2xl px-6 py-4 sm:px-8 sm:py-6 bg-black/50 backdrop-blur-sm h-52 sm:h-64 w-52 sm:w-64 lg:w-72"
                            style={{ borderColor: '#FFC810' }}
                        >
                            <div className="flex flex-col items-center justify-center gap-2">
                                <img src={secure1} alt="" className="w-24 h-24 sm:w-24" />
                                <img src={secure2} alt="" className="w-24 h-24 sm:w-24" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER SECTION */}
                <div className="mb-10 flex flex-col items-center">
                    <div className="relative w-48 h-24 sm:w-56 sm:h-28 lg:w-64 lg:h-32">
                        <img src={publish} className="w-full h-full object-contain" />
                        <p className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-[36px]"
                            style={{ fontFamily: 'GlaiveLocal' }}>
                            PUBLISHED BY
                        </p>
                    </div>

                    <div className="flex justify-center items-center mt-6 sm:mt-8">
                        <div
                            className="border-2 border-solid rounded-2xl px-6 py-4 sm:px-8 sm:py-6 bg-black/50 backdrop-blur-sm h-52 sm:h-64 w-52 sm:w-64 lg:w-72"
                            style={{ borderColor: '#FFC810' }}
                        >
                            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                                <img src={pub1} alt="" className="w-14 h-14 sm:w-24" />
                                <img src={pub2} alt="" className="w-14 h-14 sm:w-24" />
                                <img src={pub3} alt="" className="w-14 h-14 sm:w-24" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mb-0 flex flex-col items-center'>
                    <div className="relative w-48 h-24 sm:w-56 sm:h-28 lg:w-64 lg:h-32">
                        <img src={publish} className="w-full h-full object-contain" />
                        <p className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-[36px]"
                            style={{ fontFamily: 'GlaiveLocal' }}>
                            TECHNOLOGIES
                        </p>
                    </div>

                    <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16">
                        <div
                            className="border-2 border-solid rounded-2xl px-6 py-4 sm:px-8 sm:py-6 bg-black/50 backdrop-blur-sm h-52 sm:h-64 w-52 sm:w-64 lg:w-72"
                            style={{ borderColor: '#FFC810' }}
                        >
                            <div className="grid grid-cols-2 gap-2 sm:gap-4  lg:gap-4 items-center justify-center">
                                <img src={tech1} alt="" className="w-14 h-16 sm:w-8 lg:w-16" />
                                <img src={tech2} alt="" className="w-14 h-16 sm:w-8 lg:w-16" />
                                <img src={tech3} alt="" className="w-14 h-16 sm:w-8 lg:w-16" />
                                <img src={tech4} alt="" className="w-14 h-16 sm:w-8 lg:w-16" />
                                <img src={tech5} alt="" className="w-14 h-16 sm:w-8 lg:w-16" />
                                <img src={tech6} alt="" className="w-14 h-16 sm:w-8 lg:w-16" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Publish
