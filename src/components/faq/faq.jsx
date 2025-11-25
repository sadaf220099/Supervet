import React from 'react'
import faq from '../../assets/images/faq.png'
import redline from '../../assets/images/redline.png'
import dot from '../../assets/images/dot.png'
import line from '../../assets/icons/line.svg'
import reds from '../../assets/images/reds.png'
import Footer from '../../shared/footer'

function Faq() {
    return (
        <div className="w-screen h-screen">
            <section className="w-screen h-screen relative" style={{ background: '#FFC810' }}>
                <div className="absolute top-0 w-full z-10 flex justify-center">
                    <img src={redline} alt="Redline" className="w-auto h-auto max-w-full" />
                </div>
                <div className="absolute inset-0 z-0">
                    <img
                        src={faq}
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className='absolute w-full flex flex-col items-center z-10 '>
                    <div className=" text-center ">
                        <h2 className="text-5xl font-normal text-black pt-22.5" style={{ fontFamily: 'GlaiveLocal' }}>FAQ</h2>
                        <img src={line} alt="" aria-hidden="true" className="mx-auto" />
                    </div>
                    <div className="mt-20 px-1  max-w-4xl mx-auto">
                        <div className="flex items-center gap-4">
                            <img
                                src={dot} className="w-3 h-3 "
                            />
                            <p className="text-black text-[30px] font-medium" style={{ fontFamily: 'Rajdhani' }}>
                                Can your provide us with a brief introduction to super vet ?
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img
                                src={dot}
                                className="w-3 h-3 "
                            />
                            <p className="text-black text-[30px] font-medium" style={{ fontFamily: 'Rajdhani' }}>
                                What is the gameplay like briefly ?
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img
                                src={dot}
                                className="w-3 h-3 "
                            />
                            <p className="text-black text-[30px] font-medium" style={{ fontFamily: 'Rajdhani' }}>
                                Where can i learn more about the game ?
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img
                                src={dot}
                                className="w-3 h-3 "/>
                            <p className="text-black text-[30px] font-medium" style={{ fontFamily: 'Rajdhani' }}>
                                What are the different ways players can earn while they play ?
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img
                                src={dot}
                                className="w-3 h-3   " />
                            <p className="text-black text-[30px] font-medium" style={{ fontFamily: 'Rajdhani' }}>
                                If I'm an influencer/content creator/partner, who should i contact?
                            </p>
                        </div>
                    </div>
                    <img src={reds} alt="" className='mt-6' />
                </div>
                <div className='absolute w-full bottom-0                                                                                            '>
                    <Footer />
                </div>
            </section>
            
        </div>
    )
}

export default Faq