import React from 'react'
import redline from '../../assets/images/redline.png'
import map from '../../assets/images/map.png'
import nina from '../../assets/images/nina.png'
import redlines from '../../assets/images/redlines.png'
import mdot from '../../assets/images/mdot.png'
import roadmapVideo from '../../assets/vedios/roadmap.mp4'

function Roadmap() {
  const phases = [
    {
      id: 1,
      title: "Phase 1",
      items: [
        "AMM and Initial",
        "Launchpad",
        "Game Design/Plan",
        "Social Media Presence",
        "Team Building"
      ],
      position: "bottom-10 sm:bottom-16 md:bottom-29 left-[8%] sm:left-1/4"
    },
    {
      id: 2,
      title: "Phase 2",
      items: [
        "Website Launch",
        "Whitepaper",
        "Gaming Development",
        "Liquidity Audit",
        "Marketing & Ads"
      ],
      position: "top-24 sm:top-32 md:top-45 left-[8%] sm:left-1/3"
    },
    {
      id: 3,
      title: "Phase 3",
      items: [
        "Seed (and Private)",
        "Round",
        "Strategic Partnership",
        "IDO Launch",
        "Tier Partnerships",
        "Mega NFT Airdrop"
      ],
      position: "bottom-10 sm:bottom-16 md:bottom-21 right-[8%] sm:right-1/3"
    },
    {
      id: 4,
      title: "Phase 4",
      items: [
        "Game Trailer",
        "Game Alpha version",
        "PR Solon Fire IMC",
        "NFT Staking",
        "Community Expansion"
      ],
      position: "top-28 sm:top-36 md:top-47 right-[8%] sm:right-1/4"
    }
  ]

  const dotPositions = [
    { left: "21%", top: "60%" },
    { left: "33%", top: "40%" },
    { left: "47%", top: "60%" },
    { left: "62%", top: "40%" }
  ]

  return (
    <section className="w-screen min-h-screen relative overflow-hidden">

      <div className="absolute top-0 w-full z-10 flex justify-center">
        <img src={redline} alt="Redline" className="w-full max-w-full" />
      </div>

      <div className="absolute inset-0 z-0">
        <video
          src={roadmapVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -top-4 sm:-top-6 md:-top-9 left-1/2 -translate-x-1/2 z-20">
        <img src={map} alt="Roadmap Sign" className="w-28 sm:w-40 md:w-60 h-auto" />
      </div>

      <div className="absolute bottom-0 left-1 sm:left-2 md:left-15 z-10 hidden sm:block">
        <img
          src={nina}
          alt=""
          className="max-h-[300px] sm:max-h-[450px] md:max-h-[600px] w-auto"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 px-2 sm:px-4">
        <div className="relative w-full top-11 sm:bottom-10">
          <img src={redlines} alt="Connecting lines" className="w-full h-auto" />

          {dotPositions.map((dot, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: dot.left,
                top: dot.top,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <img src={mdot} alt="connector" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            </div>
          ))}
        </div>
      </div>

      {phases.map((phase) => (
        <div key={phase.id} className={`absolute ${phase.position} z-20`}>
          <div className="bg-opacity-70 p-2 sm:p-3 md:p-4 max-w-[180px] sm:max-w-xs">
            <h3 className="text-white text-sm sm:text-lg md:text-2xl font-bold mb-1 rajdhani-font">
              {phase.title}
            </h3>
            <ul className="text-white text-xs sm:text-sm md:text-xl rajdhani-font space-y-1">
              {phase.items.map((item, index) => (
                <li key={index} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

    </section>
  )
}

export default Roadmap
