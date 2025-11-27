import React from 'react'
import { Icon } from '@iconify/react'
import logo from '../assets/images/logo.png'

function Footer() {
    return (
        <footer className="text-black py-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-10">
                    <div className="flex justify-center lg:justify-start lg:col-span-1 hidden sm:block">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 object-contain"
                        />
                    </div>

                  
                    <div className="lg:col-span-3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 text-center sm:text-left">

                      
                        <div>
                            <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: 'Rajdhani' }}>
                                LEARN MORE
                            </h3>
                            <ul className="space-y-1">
                                {["Home", "Gameplay", "Roadmap", "Superverse"].map((item, i) => (
                                    <li key={i}>
                                        <a className="text-black text-medium lg:text-lg hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                       
                        <div>
                            <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: 'Rajdhani' }}>
                                Marketplace
                            </h3>
                            <ul className="space-y-1">
                                {["Character", "In-Game Assets", "Buy/Sell", "NFT Staking"].map((item, i) => (
                                    <li key={i}>
                                        <a className="text-black text-medium lg:text-lg hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                       
                        <div>
                            <h3 className="text-medium lg:text-xl font-semibold mb-1" style={{ fontFamily: 'Rajdhani' }}>
                                QUICK LINKS
                            </h3>
                            <ul className="space-y-1">
                                {["Whitepepper", "Pitch Deck", "Marketplace", "Smart Contract"].map((item, i) => (
                                    <li key={i}>
                                        <a className="text-black text-medium lg:text-lg hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <div className="lg:col-span-1 flex justify-center lg:justify-start">
                        <div className="w-full max-w-xs text-center lg:text-left">

                            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Rajdhani' }}>
                                SUBSCRIBE US
                            </h3>

                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 pr-12 bg-gray-800 text-white border border-gray-600 rounded-lg 
                                    focus:outline-none focus:border-yellow-500 text-sm"
                                    style={{ fontFamily: 'Rajdhani' }}
                                />

                                <a className="absolute right-0 top-0 h-full w-10 bg-red-600 flex items-center justify-center rounded-r-lg">
                                    <Icon icon="mdi:youtube" className="w-5 h-5 text-white" />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
