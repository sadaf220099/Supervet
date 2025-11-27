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

                {/* Top Red Line */}
                <div className="absolute top-0 w-full z-10 flex justify-center">
                    <img src={redline} alt="Redline" className="w-auto h-auto max-w-full" />
                </div>

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={faq}
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                {/* FAQ Section */}
                <div className="absolute w-full flex flex-col items-center z-10 px-2">

                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black pt-10"
                            style={{ fontFamily: 'GlaiveLocal' }}>
                            FAQ
                        </h2>
                        <img src={line} alt="" aria-hidden="true" className="mx-auto w-28 sm:w-32 md:w-auto" />
                    </div>

                    {/* FAQ Items */}
                    <div className="mt-10 px-2 max-w-4xl mx-auto space-y-4">

                        {[
                            "Can your provide us with a brief introduction to super vet ?",
                            "What is the gameplay like briefly ?",
                            "Where can I learn more about the game ?",
                            "What are the different ways players can earn while they play ?",
                            "If I'm an influencer/content creator/partner, who should I contact?"
                        ].map((text, index) => (
                            <div key={index} className="flex items-start gap-3">

                                <img src={dot} className="w-2 h-2 sm:w-3 sm:h-3" />

                                <p className="text-black 
                                text-[14px] sm:text-[18px] md:text-[22px] lg:text-[30px]
                                font-normal md:font-medium"
                                    style={{ fontFamily: 'Rajdhani' }}>
                                    {text}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Bottom Decoration */}
                    <img src={reds} alt="" className="mt-6 w-32 sm:w-40 md:w-auto hidden sm:block" />
                </div>

                {/* Footer */}
                <div className="absolute w-full bottom-0">
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Faq
