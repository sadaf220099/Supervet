import React, { useRef } from 'react'
import { Carousel } from 'antd'
import red from '../../assets/images/red.png'
import Button from '../../shared/Button'
import team from '../../assets/images/team.png'
import advisors from '../../assets/images/advisors.png'
import teamline from '../../assets/images/teamline.png'
import SquadCard from './squadCard'
import msa from '../../assets/images/msa.png'
import msa1 from '../../assets/images/msa1.png'
import redline from '../../assets/images/redline.png'
import squadVideo from '../../assets/vedios/squad.mp4'


function Squad() {
  const carouselRef = useRef(null);

  const squadMembers = [
    {
      id: 1,
      name: 'DAMIAN CLERK',
      role: 'Founder Of Super Vet',
      image: 'squadimg'
    },
    {
      id: 2,
      name: 'JOHN DOE',
      role: 'Co-Founder',
      image: 'squadimg'
    },
    {
      id: 3,
      name: 'JANE SMITH',
      role: 'Lead Developer',
      image: 'squadimg'
    },
    {
      id: 4,
      name: 'MIKE WILSON',
      role: 'Game Designer',
      image: 'squadimg'
    },
    {
      id: 5,
      name: 'SARAH JONES',
      role: 'Marketing Head',
      image: 'squadimg'
    },
    {
      id: 6,
      name: 'TOM BROWN',
      role: 'Art Director',
      image: 'squadimg'
    },
    {
      id: 7,
      name: 'LISA DAVIS',
      role: 'Community Manager',
      image: 'squadimg'
    },
    {
      id: 8,
      name: 'CHRIS MILLER',
      role: 'Tech Lead',
      image: 'squadimg'
    }
  ];

  const groupedMembers = [];
  for (let i = 0; i < squadMembers.length; i += 4) {
    groupedMembers.push(squadMembers.slice(i, i + 4));
  }

  const handlePrevious = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <section className="w-screen h-screen relative">
      <div className="absolute top-0 w-full z-5 flex justify-center">
        <img src={redline} alt="Redline" className="w-auto h-auto max-w-full" />
      </div>
      <div className="absolute inset-0 z-0">
        <video
          src={squadVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-6"
        style={{
          background: 'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)'
        }}
      ></div>
      <div className="absolute w-full flex justify-center z-10 top-20">
        <Button
          text="SQUAD"
          className="bg-[#FFC810] text-black text-[50px] font-normal px-6 py-3 hover:scale-105"
          style={{ fontFamily: 'Glaive, Times New Roman, serif' }}
        />
      </div>
      <div className="absolute w-full flex justify-center items-center gap-20 z-10 top-55">
        <img src={team} alt="Team" className="" />
        <img src={advisors} alt="Advisors" className="" />
      </div>
      <div className="absolute w-full flex justify-center items-center z-10 bottom-10">

        <button 
          onClick={handlePrevious}
          className="mr-8 transition-all hover:scale-110"
        >
          <img
            src={msa}
            alt="Previous"
            className="w-26.5 h-26.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer object-contain"
          />
        </button>

        <div className="max-w-6xl" style={{ width: '1200px' }}>
          <Carousel 
            ref={carouselRef}
            dots={false}
            infinite={true}
            speed={500}
          >
            {groupedMembers.map((group, groupIndex) => (
              <div key={groupIndex}>
                <div className="flex gap-8 justify-center px-4">
                  {group.map((member, index) => (
                    <SquadCard
                      key={member.id}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      isFirst={groupIndex === 0 && index === 0}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <button 
          onClick={handleNext}
          className="ml-8 transition-all hover:scale-110"
        >
          <img
            src={msa1}
            alt="Next"
            className="w-26.5 h-26.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer object-contain"
          />
        </button>
      </div>
    </section>
  )
}

export default Squad