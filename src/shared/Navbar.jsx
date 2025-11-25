import React from 'react';
import logo from '../assets/images/logo.png'
import icon from '../assets/icons/icon.svg'
import glaiveFont from '../assets/fonts/Glaive Regular.woff'

export default function Navbar() {
    // Load Glaive font
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @font-face {
        font-family: 'GlaiveLocal';
        src: url('${glaiveFont}') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <nav >

            <div className="flex justify-between  ">
                <div className=" flex items-center">
                    <img src={logo} alt="" />
                </div>
                <div className='flex items-center gap-4'>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white  text-[17px] font-bold ">
                            Home
                        </a>
                        <a href="#about" className="text-white  text-[17px] font-bold">
                            NFT'S
                        </a>
                        <a href="#services" className="text-white     text-[17px]  font-bold">
                            Roadmap
                        </a>
                        <a href="#contact" className="text-white    text-[17px] font-bold   ">
                            Squad
                        </a>
                        <a href="#services" className="text-white  text-[17px]  font-bold ">
                            News
                        </a>
                        <a href="#contact" className="text-white    text-[17px] font-bold   ">
                            Marketplace
                        </a>
                    </div>
                    <div className="relative">
                        <img src={icon} alt="Example" className="w-full" />
                        <p className="absolute inset-0 flex items-center justify-center text-black text-xl font-normal" style={{ fontFamily: 'GlaiveLocal' }}>
                            Connect Wallet
                        </p>
                    </div>
                </div>
            </div>

        </nav>
    );
}