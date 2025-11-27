import React, { useEffect } from 'react'
import vector1 from '../../assets/images/vector1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Tokencard({ title, description }) {
  useEffect(() => {
      AOS.init();
  }, 
  []);
  return (
    <div className="relative w-54 h-28" data-aos="zoom-out-down" data-aos-duration="2000">
     
      <div
        className="absolute -top-1 -left-1 -bottom-1 -right-1 z-0"
        style={{ backgroundColor: '#FF0000' }}
      />
   
      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src={vector1}
          alt="Card background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold text-black mb-1 rajdhani-font uppercase">
          {title}
        </h3>
        <p className="text-3xl font-black text-black rajdhani-font uppercase">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Tokencard