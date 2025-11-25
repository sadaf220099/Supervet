import React from 'react'
import { Icon } from '@iconify/react'
import logo from '../assets/images/logo.png'

function Footer() {
    return (
        <footer className="text-black py-12 px-8" >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                
                    <div className="lg:col-span-1 flex justify-center lg:justify-start">
                        <div className="flex flex-col items-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Rajdhani' }}>
                                LEARN MORE
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Gameplay
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Roadmap
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Superverse
                                    </a>
                                </li>
                            </ul>
                        </div>

                       
                        <div>
                            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Rajdhani' }}>
                                Marketplace
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Character
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                            In-Game Assets
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Buy/Sell
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        NFT Staking
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Rajdhani' }}>
                                QUICK LINKS
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Whitepepper
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Pitch Deck
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Marketplace
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-black hover:text-white transition-colors" style={{ fontFamily: 'Rajdhani' }}>
                                        Smart comtract
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="text-center lg:text-left">
                            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Rajdhani' }}>
                                SUBSCRIBE US
                            </h3>

                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 pr-12 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
                                        style={{ fontFamily: 'Rajdhani' }}
                                    />
                                    <div className="absolute right-0 top-0 h-full">
                                        <a href="#" className="inline-flex items-center justify-center w-12 h-full bg-red-600 rounded-r-lg hover:bg-red-500 transition-colors">
                                            <Icon
                                                icon="mdi:youtube"
                                                className="w-6 h-6 text-white"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer
