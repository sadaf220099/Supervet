import React from 'react'
import meta from '../../assets/images/metaverse.png'
import ow from '../../assets/images/ow.png'
import Button from '../../shared/Button'
import redline from '../../assets/images/redline.png'

function MetaVerse() {
    return (
        <section className="w-screen h-screen relative">
            <div className="absolute inset-0 z-0">
                <img
                    src={meta}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
                <p className="text-white text-[33px] font-bold leading-relaxed" style={{ fontFamily: 'Rajdhani' }}>
                    RESCUE IN{" "}
                    <span className="text-[#FFC810]">METAVERSE</span>{" "}
                    CUSTOMIZE{" "}
                    <span className="text-[#FFC810]">AVATARS</span>{" "}
                    PLAY WITH{" "}
                    <span className="text-[#FFC810]">OCULUS</span>
                </p>

                <img src={ow} alt="" className="mt-4 animate-bounce "  />

                <Button
                    text="VR TEASER "
                    className="bg-[#FFC810] text-black text-[28px] font-bold px-6 py-3 mt-6 hover:scale-105 transition-transform duration-300 ease-in-out zoom-in"
                    style={{ fontFamily: 'Rajdhani' }}
                />
            </div>
            <div className="absolute top-0 w-full">
                            <img src={redline} alt=""  />
                        </div>
        </section>
    )
}

export default MetaVerse
