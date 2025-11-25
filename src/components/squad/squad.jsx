import React from 'react'
import squad from '../../assets/images/squad.png'
import red from '../../assets/images/red.png'
import Button from '../../shared/Button'
import team from '../../assets/images/team.png'
import advisors from '../../assets/images/advisors.png'
import teamline from '../../assets/images/teamline.png'
import SquadCard from './squadCard'
import msa from '../../assets/images/msa.png'
import msa1 from '../../assets/images/msa1.png'
import redline from '../../assets/images/redline.png'


function Squad() {
  const squadMembers = [
    {
      id: 1,
      name: 'DAMIAN CLERK',
      role: 'Founder Of Super Vet',
      image: 'squadimg'
    },
    {
      id: 2,
      name: 'DAMIAN CLERK',
      role: 'Founder Of Super Vet',
      image: 'squadimg'
    },
    {
      id: 3,
      name: 'DAMIAN CLERK',
      role: 'Founder Of Super Vet',
      image: 'squadimg'
    },
    {
      id: 4,
      name: 'DAMIAN CLERK',
      role: 'Founder Of Super Vet',
      image: 'squadimg'
    }
  ];

  return (
    <section className="w-screen h-screen relative">
      <div className="absolute top-0 w-full z-5 flex justify-center">
        <img src={redline} alt="Redline" className="w-auto h-auto max-w-full" />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={squad}
          alt="Background"
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

        <div className="mr-8">
          <img
            src={msa}
            alt="MSA Left"
            className="w-26.5 h-26.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer object-contain"
          />
        </div>

        <div className="flex gap-8 max-w-6xl">
          {squadMembers.map((member, index) => (
            <SquadCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              isFirst={index === 0}
            />
          ))}
        </div>
        <div className="ml-8">
          <img
            src={msa1}
            alt="MSA Right"
            className="w-26.5 h-26.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Squad