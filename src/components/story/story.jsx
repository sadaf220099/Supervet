import React from 'react'
import storybg from '../../assets/images/storybg.png'
import line from '../../assets/icons/line.svg'
import glaiveFont from '../../assets/fonts/Glaive Regular.woff'
import redline from '../../assets/images/redline.png'

const Story = () => {

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
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center py-20 px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-normal text-white mb-4" style={{ fontFamily: 'GlaiveLocal' }}>Our Story</h2>
                    <img src={line} alt="" aria-hidden="true" className="mx-auto" />
                </div>
                <p className="text-white text-center max-w-4xl text-[28px] font-medium leading-relaxed" style={{ fontFamily: 'Rajdhani' }}>
                    Super Vet is rescue to earn and read to earn 3D NFT metaverse RPG game & comics. In this game Super Vets are on the missions to rescue animals in the Super Vet World and Superverse - Animals own Metaverse. Players will rescue animals in Superverse (Metaverse) using their own customize avatar, and oculus gadgets.
                </p>
            </div>
            <div className="absolute top-0 w-full">
                            <img src={redline} alt=""  />
                        </div>
        </section>
    )
}

export default Story