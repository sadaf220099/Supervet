import React from 'react'
import super1 from '../../assets/images/super.png'
import redline from '../../assets/images/redline.png'
import supers from '../../assets/images/super1.png'
import super2 from '../../assets/images/super2.png'
import super3 from '../../assets/images/super3.png'
import super4 from '../../assets/images/super4.png'
import super5 from '../../assets/images/super5.png'
import super6 from '../../assets/images/super6.png'
import dr from '../../assets/images/dr.png'
import vet from '../../assets/images/vet.png'


function Super() {
  return (
     <section className="w-screen h-screen relative overflow-hidden">
         
          <div className="absolute top-0 left-0 z-5">
            <img src={super5} alt="Top Left Background" className="w-auto h-auto block" />
          </div>
          <div className="absolute top-0 left-0 z-10">
            <img src={supers} alt="Top Left" className="w-auto h-auto block" />
          </div>
          <div className="absolute top-0 left-3 z-20">
            <img src={vet} alt="Vet" className="w-[392px] h-auto block" />
          </div>

         
          <div className="absolute top-0 w-full z-5 flex justify-center">
            <img src={redline} alt="Redline" className="w-auto h-auto max-w-full" />
          </div>

          <div className="absolute inset-0 z-0">
            <img
              src={super1}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-between px-8">
      
            <div>
              <img src={super3} alt="Left" className="w-auto h-auto block max-h-screen" />
            </div>

          
            <div>
              <img src={dr} alt="Center" className="w-auto h-auto block max-h-screen" />
            </div>

            <div>
              <img src={super4} alt="Right" className="w-auto h-auto block max-h-screen" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src={super6} alt="Bottom Right Background" className="w-auto h-auto block" />
          </div>
          <div className="absolute bottom-0 right-0 z-30">
            <img src={super2} alt="Bottom Right" className="w-auto h-auto block" />
          </div>
        </section>
  )
}

export default Super