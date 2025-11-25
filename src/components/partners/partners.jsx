import React from 'react'
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

function Partners() {
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
        <section className="w-screen h-[100vh] relative">
            <div className="absolute inset-0 z-0">
                <img
                    src={partners}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='absolute w-full flex flex-col items-center z-10 pb-8'>
                <div className="mt-20 text-center ">
                    <h2 className="text-5xl font-normal text-white mb-4" style={{ fontFamily: 'GlaiveLocal' }}>Partners</h2>
                    <img src={line} alt="" aria-hidden="true" className="mx-auto" />
                </div>
                <div className='flex gap-23'>
                    <img src={part1} alt="" className='w-[195px] h-[195px] ' />
                    <img src={part2} alt="" className='w-[195px] h-[195px]' />
                    <img src={part3} alt="" className='w-[195px] h-[195px]' />
                    <img src={part4} alt="" className='w-[195px] h-[195px]' />
                    <img src={part5} alt="" className='w-[195px] h-[195px]' />

                </div>
                <div className='flex gap-23'>
                    <img src={part6} alt="" className='w-[195px] h-[195px] ' />
                    <img src={part7} alt="" className='w-[195px] h-[195px]' />
                    <img src={part8} alt="" className='w-[195px] h-[195px]' />
                    <img src={part9} alt="" className='w-[195px] h-[195px]' />
                    <img src={part10} alt="" className='w-[195px] h-[195px]' />

                </div>
                <div className='flex gap-23 mr-[285px]'>
                    <img src={part11} alt="" className='w-[195px] h-[140px] ' />
                    <img src={part12} alt="" className='w-[195px] h-[195px]' />
                    <img src={part13} alt="" className='w-[195px] h-[195px]' />
                    <img src={part14} alt="" className='w-[195px] h-[195px]' />


                </div>
            </div>
            <div className="absolute top-0 w-full">
                <img src={redline} alt="" />
            </div>

        </section>
    )
}

export default Partners
