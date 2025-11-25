import React from 'react'
import redline from '../../assets/images/redline.png'
import secure1 from '../../assets/images/secure1.png'
import secure2 from '../../assets/images/secure2.png'
import publish from '../../assets/icons/publish.svg'
import pub1 from '../../assets/images/pub1.png'
import pub2 from '../../assets/images/pub2.png'
import pub3 from '../../assets/images/pub3.png'
import tech1 from '../../assets/images/TECH1.png'
import tech2 from '../../assets/images/TECH2.png'
import tech3 from '../../assets/images/TECH3.png'
import tech4 from '../../assets/images/TECH4.png'
import tech5 from '../../assets/images/TECH5.png'
import tech6 from '../../assets/images/TECH6.png'
function Publish() {
    return (
        <section className="w-screen h-screen bg-black flex items-center justify-center relative">
            <div className="top-0 w-full absolute">
                <img src={redline} alt="" />
            </div>
            <div className='flex justify-center gap-10'>
                <div className='mb-0'>
                    <div className="relative w-64 h-32">
                        <img src={publish} className="w-full h-full object-contain" />
                        <p className="absolute inset-0 flex items-center justify-center text-white text-[36px] font-normal" style={{ fontFamily: 'GlaiveLocal' }}>
                            WATCH TAILOR
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-16">
                        <div
                            className="border-2 border-solid rounded-2xl px-8 py-6 bg-black/50 backdrop-blur-sm h-64"
                            style={{ borderColor: '#FFC810' }}
                        >
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className="text-center">
                                    <img src={secure1} alt="" />
                                </div>
                                <div className="text-center">
                                    <img src={secure2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-10'>
                    <div className="relative w-64 h-32">
                        <img src={publish} alt="Example" className="w-full h-full object-contain" />
                        <p className="absolute inset-0 flex items-center justify-center text-white text-[36px] font-normal" style={{ fontFamily: 'GlaiveLocal' }}>
                            PUBLISHED BY
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <div
                            className="border-2 border-solid rounded-2xl px-8 py-6 bg-black/50 backdrop-blur-sm"
                            style={{ borderColor: '#FFC810' }}
                        >
                            <div className="flex flex-col items-center justify-center gap-6">
                                <div className="text-center">
                                    <img src={pub1} alt="" />
                                </div>



                                <div className="text-center">
                                    <img src={pub2} alt="" />
                                </div>
                                <div className="text-center">
                                    <img src={pub3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-0 h-80'>
                    <div className="relative w-64 h-32">
                        <img src={publish} className="w-full h-full object-contain" />
                        <p className="absolute inset-0 flex items-center justify-center text-white text-[36px] font-normal" style={{ fontFamily: 'GlaiveLocal' }}>
                            TECHNOLOGIES
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-16">
                        <div
                            className="border-2 border-solid rounded-2xl px-8 py-6 bg-black/50 backdrop-blur-sm h-64"
                            style={{ borderColor: '#FFC810' }}
                        >
                            <div className="grid grid-cols-2 gap-1 items-center justify-center h-full">
                                <div className="text-center">
                                    <img src={tech1} alt="" />
                                </div>
                                <div className="text-center">
                                    <img src={tech2} alt="" />
                                </div>
                                <div className="text-center">
                                    <img src={tech3} alt="" />
                                </div>
                                <div className="text-center">
                                    <img src={tech4} alt="" />
                                </div>
                                <div className="text-center">
                                    <img src={tech5} alt="" />
                                </div>
                                <div className="text-center">
                                    <img src={tech6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publish
