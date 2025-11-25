import React from 'react'
import squadimg from '../../assets/images/squadimg.png'
import red from '../../assets/images/red.png'
import black from '../../assets/images/black.png'
import link from '../../assets/images/link.png'
import vector from '../../assets/images/vector.png'

function SquadCard({ name, role, image, isFirst }) {
    return (
        <div className="relative">
            {isFirst && (
                <img
                    src={vector}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-auto h-auto z-30"
                    style={{ maxWidth: '386px', maxHeight: '210px' }}
                />
            )}

            <img
                src={red}
                className="absolute top-1 left-1 w-auto h-auto z-0"
                style={{ maxWidth: '200px', maxHeight: '200px' }}
            />

            <div
                className="relative  overflow-hidden ml-4 mt-4"
                style={{
                    background: '#FFC810'
                }}
            >
                <img
                    src={black}
                    className="absolute top-30 right-0 w-auto h-auto z-15"
                    style={{ maxWidth: '150px', maxHeight: '50px' }}
                />

                
                <img
                    src={black}
                    className="absolute bottom-20 left-0 w-auto h-auto z-15"
                    style={{ maxWidth: '150px', maxHeight: '50px' }}
                />

                
                <img
                    src={squadimg}
                    className="w-full h-full object-cover relative z-10"
                />

               
                <div
                    className="absolute inset-0 z-20"
                    style={{
                        background: 'linear-gradient(0deg, #000 0%, rgba(4, 4, 4, 0.00) 69.58%)'
                    }}
                ></div>

                <div className="absolute bottom-4 left-4 z-30">
                    <h3 className="text-white text-[23px] font-normal bebas-font" >
                        {name}
                    </h3>
                    <p className="text-white text-xs font-normal opacity-80 quicksand-font">
                        {role}
                    </p>
                </div>

        
                <div className="absolute bottom-4 right-4 z-30">
                    <a href="#" className="block">
                        <img
                            src={link}
                            className="w-6 h-6 object-contain hover:opacity-80 transition-opacity"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SquadCard