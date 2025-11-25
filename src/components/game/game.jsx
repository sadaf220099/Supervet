import React from 'react'
import game from '../../assets/images/game.png'
import gamebg from '../../assets/icons/game.svg'
import trek from '../../assets/images/trek.png'
import trek1 from '../../assets/icons/trek1.svg'
import trek2 from '../../assets/icons/trek2.svg'
import trek3 from '../../assets/icons/trek3.svg'
import glaiveFont from '../../assets/fonts/Glaive Regular.woff'
import redline from '../../assets/images/redline.png'

function Game() {
   
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

        <section className="w-screen h-screen relative">
            <div className="absolute inset-0 z-0">
                <img
                    src={game}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative flex justify-center items-center">
                <img src={gamebg} alt="Example" className="" />
                <p className="absolute inset-0 flex items-center justify-center text-black text-[50px] font-normal" style={{ fontFamily: 'GlaiveLocal' }}>
                    GAME PLAY
                </p>
            </div>
            <div className='absolute ml-170 mt-20 w-[700px] flex flex-col gap-1 '>
                <h3 className='text-xl font-semibold text-[#E2E2E2]'>Play Super Vet & Earn Exciting Rewards</h3>
                <p className='text-[#E2E2E2] font-normal text-sm mt-1.5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus in dolor, pulvinar euismod et arcu sit odio. At sed vulputate
                    ornare maecenas sit. Malesuada vitae augue morbi eget donec. Erat a eget sed sollicitudin vitae ac at. Sagittis senectus hen
                    drerit accumsan tinciduntut aenean at in laoreet.</p>
                <img src={trek} alt="" className=' h-[300px]' />
                <div className='flex gap-1 pb-3 '>
                    <img src={trek1} alt="" />
                    <img src={trek2} alt="" />
                    <img src={trek3} alt="" />
                </div>
            </div>
<div className="absolute top-0 w-full">
                <img src={redline} alt=""  />
            </div>
        </section>

    )
}

export default Game
