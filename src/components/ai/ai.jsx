import React from 'react'
import ai from '../../assets/images/ai.png'
import glaiveFont from '../../assets/fonts/Glaive Regular.woff'
import redline from '../../assets/images/redline.png'
import horseVideo from '../../assets/vedios/horse.mp4'

function Ai() {
   
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
                    src={ai}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='absolute inset-0 z-10 flex justify-center items-center px-8 md:px-16 lg:px-24'>
                <div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                   
                    <div className='space-y-6'>
                        <p className="text-[84px] md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Rajdhani' }}>
                            <span className="text-[#FFC810]">FUTURE </span>
                            <span className="text-white">PLAN </span>
                            <span className="text-[#10E2FF]">AI</span>
                        </p>
                        <p className='text-white text-[25px] md:text-base lg:text-lg leading-relaxed' style={{ fontFamily: 'Rajdhani' }}>
                            Lorem ipsum dolor sit amet consectetur. Maecenas eu egestas sit fringilla. Magna
                            cursus condimentum quis et in. Nec maecenas lobortis faucibus turpis. Morbi hendrerit
                            imperdiet ornare aliquam turpis in lacus nulla orci. Odio viverra vehicula enim lorem fringilla.
                            Ante ut dui nullam nunc condimentum condimentum mattis adipiscing vestibulum.
                        </p>
                    </div>

                 
                    <div className="flex justify-center lg:justify-end">
                        <video 
                            src={horseVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 w-full">
                <img src={redline} alt=""  />
            </div>
        </section>
    )
}

export default Ai