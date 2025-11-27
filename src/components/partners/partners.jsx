import React, { useEffect } from 'react'
import partners from '../../assets/images/partners.png'
import line from '../../assets/icons/line.svg'
import part1 from '../../assets/images/part1.png'
import part2 from '../../assets/images/part2.png'
import part3 from '../../assets/images/part3.png'
import part4 from '../../assets/images/part4.png'
import part5 from '../../assets/images/part5.png'
import part6 from '../../assets/images/part6.png'
import part7 from '../../assets/images/part7.png'
import part8 from '../../assets/images/part8.png'
import part9 from '../../assets/images/part9.png'
import part10 from '../../assets/images/part10.png'
import part11 from '../../assets/images/part11.png'
import part12 from '../../assets/images/part12.png'
import part13 from '../../assets/images/part13.png'
import part14 from '../../assets/images/part14.png'
import glaiveFont from '../../assets/fonts/Glaive Regular.woff'
import redline from '../../assets/images/redline.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Partners() {
    useEffect(() => {
  {
            AOS.init();
        }
    }, []);
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
        <section className="w-screen min-h-screen relative">

            <div className="absolute inset-0 z-0">
                <img
                    src={partners}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

        
            <div className="absolute w-full flex flex-col items-center z-10 pb-8 px-4" data-aos="zoom-in-up" data-aos-duration="2000">

                <div className="mt-12 md:mt-16 text-center">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-1"
                        style={{ fontFamily: 'GlaiveLocal' }}
                    >
                        Partners
                    </h2>
                    <img src={line} alt="" aria-hidden="true" className="mx-auto w-32 sm:w-auto" />
                </div>

                
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-23 mt-1">
                    <img src={part1} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part2} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part3} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part4} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part5} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                </div>


                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-23 mt-1">
                    <img src={part6} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part7} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part8} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part9} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part10} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-23 mt-1 md:mr-[285px]">
                    <img src={part11} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part12} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part13} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                    <img src={part14} alt="" className="w-24 sm:w-24 md:w-[195px] h-auto" />
                </div>

            </div>

           
            <div className="absolute top-0 w-full z-20">
                <img src={redline} alt="" className="w-full" />
            </div>

        </section>
    )
}

export default Partners
