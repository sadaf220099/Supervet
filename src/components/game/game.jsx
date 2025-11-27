import React from 'react'
import gamebg from '../../assets/icons/game.svg'
import trek from '../../assets/images/trek.png'
import trek1 from '../../assets/icons/trek1.svg'
import trek2 from '../../assets/icons/trek2.svg'
import trek3 from '../../assets/icons/trek3.svg'
import glaiveFont from '../../assets/fonts/Glaive Regular.woff'
import redline from '../../assets/images/redline.png'
import gameVideo from '../../assets/vedios/game.mp4'
import play from '../../assets/images/play.png'

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
        <section className="w-screen min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    src={gameVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute top-0 w-full z-30">
                <img src={redline} alt="" className="w-full" />
            </div>

            <div className="relative z-10 flex justify-center items-center ">
                <img src={gamebg} alt="Example" className="w-48 sm:w-64 lg:w-auto" />
                <p
                    className="absolute inset-0 flex items-center justify-center
                               text-black text-2xl sm:text-4xl lg:text-[50px] font-normal"
                    style={{ fontFamily: 'GlaiveLocal' }}
                >
                    GAME PLAY
                </p>
            </div>

           
            <div className="absolute inset-0 flex flex-col lg:flex-row 
                            items-center justify-center 
                            px-4 sm:px-6 lg:px-10 
                            z-10 mt-16 gap-6">

                
                <div className="z-20">
                    <img
                        src={play}
                        alt="Play"
                        className="w-[260px] sm:w-[360px] lg:w-[544px]
                                   h-auto object-contain"
                        onError={(e) => console.log('Play image failed to load:', e)}
                    />
                </div>

                
                <div className="w-full max-w-xl lg:w-[700px] flex flex-col gap-2 text-center lg:text-left">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#E2E2E2]">
                        Play Super Vet & Earn Exciting Rewards
                    </h3>

                    <p className="text-[#E2E2E2] font-normal text-xs sm:text-sm mt-1.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus in dolor, pulvinar euismod et arcu sit odio. At sed vulputate
                        ornare maecenas sit. Malesuada vitae augue morbi eget donec. Erat a eget sed sollicitudin vitae ac at. Sagittis senectus hen
                        drerit accumsan tinciduntut aenean at in laoreet.
                    </p>

                    <img src={trek} alt="" className="h-40 sm:h-56 lg:h-[300px] mx-auto lg:mx-0" />

                    <div className="flex gap-2 pb-3 justify-center lg:justify-start">
                        <img src={trek1} alt="" className="w-8 sm:w-10 lg:w-auto" />
                        <img src={trek2} alt="" className="w-8 sm:w-10 lg:w-auto" />
                        <img src={trek3} alt="" className="w-8 sm:w-10 lg:w-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game
