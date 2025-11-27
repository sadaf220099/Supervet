import React, { useEffect } from 'react'
import storybg from '../../assets/images/storybg.png'
import line from '../../assets/icons/line.svg'
import glaiveFont from '../../assets/fonts/Glaive Regular.woff'
import redline from '../../assets/images/redline.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Story = () => {
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
                    src={storybg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8" data-aos="zoom-in-down" data-aos-duration="2000">
                <div className="mb-10 sm:mb-16 text-center" >
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4"
                        style={{ fontFamily: 'GlaiveLocal' }}
                    >
                        Our Story
                    </h2>
                    <img src={line} alt="" aria-hidden="true" className="mx-auto w-32 sm:w-40" />
                </div>

                <p
                    className="text-white text-center max-w-full sm:max-w-3xl lg:max-w-4xl 
                               text-base sm:text-xl lg:text-[28px] 
                               font-medium leading-relaxed sm:leading-loose"
                    style={{ fontFamily: 'Rajdhani' }}
                >
                    Super Vet is rescue to earn and read to earn 3D NFT metaverse RPG game & comics.
                    In this game Super Vets are on the missions to rescue animals in the Super Vet World
                    and Superverse - Animals own Metaverse. Players will rescue animals in Superverse
                    (Metaverse) using their own customize avatar, and oculus gadgets.
                </p>
            </div>

            <div className="absolute top-0 w-full">
                <img src={redline} alt="" className="w-full" />
            </div>
        </section>
    )
}

export default Story
