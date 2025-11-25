import React from 'react'
import roadmap from '../../assets/images/roadmap.png'
import redline from '../../assets/images/redline.png'
import map from '../../assets/images/map.png'
import nina from '../../assets/images/nina.png'
import redlines from '../../assets/images/redlines.png'
import mdot from '../../assets/images/mdot.png'


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
      position: "bottom-20 md:bottom-29 left-1/4"
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
      position: "top-32 md:top-45 left-1/4 md:left-1/3"
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
      position: "bottom-16 md:bottom-21 right-1/4 md:right-1/3"
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
      position: "top-36 md:top-47 right-1/4"
    }
  ]

  const dotPositions = [
    { left: "21%", top: "60%" },
    { left: "33%", top: "40%" },
    { left: "47%", top: "60%" },
    { left: "62%", top: "40%" }
  ]

  return (
    <section className="w-screen h-screen relative overflow-hidden">
            
             <div className="absolute top-0 w-full z-5 flex justify-center">
               <img src={redline} alt="Redline" className="w-auto h-auto max-w-full" />
             </div>
             
             <div className="absolute inset-0 z-0">
               <img
                 src={roadmap}
                 alt="Background"
                 className="w-full h-full object-cover"
               />
             </div>

             <div className="absolute -top-6 md:-top-9 left-1/2 -translate-x-1/2 z-20">
               <img src={map} alt="Roadmap Sign" className="w-40 md:w-60 h-auto" />
             </div>

             <div className="absolute bottom-0 left-2 md:left-15 z-15">
               <img src={nina} className="w-auto h-auto" style={{ maxHeight: '600px' }} />
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 md:px-0">
               <div className="relative w-full -bottom-10">
                 <img src={redlines} alt="Connecting lines" className="h-auto w-full" />
                 
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
                     <img src={mdot} alt="connector" className="w-4 h-4 md:w-6 md:h-6" />
                   </div>
                 ))}
               </div>
             </div>

             {phases.map((phase) => (
               <div key={phase.id} className={`absolute ${phase.position} z-20`}>
                 <div className="bg-opacity-70 p-2 md:p-4">
                   <h3 className="text-white text-lg md:text-2xl font-bold mb-1 rajdhani-font">
                     {phase.title}
                   </h3>
                   <ul className="text-white text-sm md:text-xl rajdhani-font space-y-1">
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