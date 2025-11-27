import React, { useEffect } from 'react'
import redline from '../../assets/images/redline.png'
import coins from '../../assets/images/coins.png'
import coin1 from '../../assets/images/coin1.png'
import tokenCenter from '../../assets/images/tokens.png'
import token1 from '../../assets/images/token1.png'
import Tokencard from './tokencard'
import tokenVideo from '../../assets/vedios/token.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Token() {
  useEffect(() => {
   AOS.init();
  }, []);
  const tokenData = [
    { id: 1, title: "1 Billion", description: "SUPPLY" },
    { id: 2, title: "$SVET", description: "SYMBOL" },
    { id: 3, title: "$325K", description: "SUPPLY" }
  ]

  return (
    <section className="w-screen min-h-screen relative overflow-hidden">

   
      <div className="absolute top-0 w-full z-5 flex justify-center">
        <img src={redline} alt="Redline" className="w-full max-w-full" />
      </div>

    
      <div className="absolute inset-0 z-0">
        <video
          src={tokenVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

     
      <h1 className="absolute mt-24 sm:mt-32 left-1/2 -translate-x-1/2 z-20
                     text-[#FFC810] text-3xl sm:text-4xl md:text-6xl
                     font-bold rajdhani-font text-center" >
        TOKENOMICS
      </h1>

      <div className="absolute top-1/2 left-1/2
                      -translate-x-1/2 -translate-y-1/2 z-20
                      grid grid-cols-1 sm:grid-cols-3
                      gap-4 sm:gap-6 md:gap-8 " >
        {tokenData.map((item) => (
          <Tokencard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

   
      <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 z-10">
        <img
          src={tokenCenter}
          alt="Token Center"
          className="w-40 sm:w-56 md:w-auto h-auto"
        />
      </div>

   
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <img
          src={coins}
          alt="Coins Left"
          className="w-40 sm:w-56 md:w-auto h-auto"
        />
      </div>

   
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <img
          src={coin1}
          alt="Coin Right"
          className="w-40 sm:w-56 md:w-auto h-auto"
        />
      </div>

     
      <div className="absolute bottom-2 sm:bottom-5 left-1/2 -translate-x-1/2 z-10">
        <img
          src={token1}
          alt="Token Bottom"
          className="w-32 sm:w-44 md:w-auto h-auto"
        />
      </div>

    </section>
  )
}

export default Token
