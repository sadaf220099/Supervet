import React from "react";
import Navbar from "../../shared/Navbar";
import background from "../../assets/images/background.png";
import watch from "../../assets/icons/watch.svg";
import hit from "../../assets/icons/hit.svg";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";
import icon5 from "../../assets/icons/icon5.svg";
import storybg from '../../assets/images/storybg.png'
import Story from "../story/story";
import hero from '../../assets/vedios/hero.mp4'

import glaiveFont from "../../assets/fonts/Glaive Regular.woff";

function Home() {

    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @font-face {
                font-family: 'GlaiveLocal';
                src: url('${glaiveFont}') format('woff');
                font-weight: normal;
                font-style: normal;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <section
            className="w-screen min-h-screen relative">
            <div className="absolute inset-0 z-0">
                <video
                    src={hero}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 z-10">
                <Navbar />
                <div className="absolute right-2 md:right-4 lg:right-0 top-1/3 flex flex-col gap-1 md:gap-2">
                    <img src={icon1} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-auto lg:h-auto" />
                    <img src={icon2} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-auto lg:h-auto" />
                    <img src={icon3} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-auto lg:h-auto" />
                    <img src={icon4} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-auto lg:h-auto" />
                    <img src={icon5} alt="" className="w-8 h-8 md:w-10 md:h-10 lg:w-auto lg:h-auto" />
                </div>
                <div className="flex flex-col justify-center items-center h-full pb-8">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-11 mt-16 md:mt-24 lg:mt-32 px-4">
                        <div className="relative w-48 h-24 md:w-56 md:h-28 lg:w-64 lg:h-32">
                            <img src={watch} alt="Example" className="w-full h-full object-contain" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl lg:text-[36px] font-normal" style={{ fontFamily: 'GlaiveLocal' }}>
                                WATCH TAILER
                            </p>
                        </div>
                        <div className="relative w-48 h-24 md:w-56 md:h-28 lg:w-64 lg:h-32">
                            <img src={hit} alt="Example" className="w-full h-full object-contain" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl lg:text-[36px] font-normal" style={{ fontFamily: 'GlaiveLocal' }}>
                                HIT AND WIN
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center px-4 mt-6 md:mt-8 lg:mt-6">
                        <p className="text-white text-sm md:text-lg lg:text-xl font-medium text-center max-w-xs md:max-w-2xl lg:max-w-4xl leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet penatibus
                            felis diam purus augue lectus nullam. Purus mauris a scelerisque turpis le
                            o duis. Rhoncus, mauris fringilla mi, et ac. Suscipit amet quam amet lectus
                        </p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    );
}

export default Home;