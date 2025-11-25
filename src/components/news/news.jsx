import React, { useEffect } from 'react'
import backgroundImg from '../../assets/images/background.png'
import NewsFile from './newsFile'
import line from '../../assets/images/line.png'
import redline from '../../assets/images/redline.png'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'


function News() {
    useEffect(() => {
        
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'GlaiveLocal';
            src: url('/src/assets/fonts/Glaive Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          .glaive-font {
            font-family: 'GlaiveLocal', sans-serif;
          }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const newsData = [
        {
            id: 1,
            title: "BOGGY ARRIVED",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien turpis convallis ac non morbi. Adipiscing lectus justo, sit ipsum morbi. Turpis eleifend tempussociis sagittis, ipsum sit. Augue pharetra, sit nisl massa tempor molestie duis. Suscipit congue molestieeget tortor. Quis mauris enim, augue nunc, porta. Fcilisis aenean in in sodales ut orci leo egestas suspendisse. Morbi sapien ornare ipsum sed. Lectus aliq uet urna posuere varius posuere.",
            shortDescription: "Publish by : Jenny",
            shortDescription2: " Sep-8-2002",
            backgroundImg: card1
        },
        {
            id: 2,
            title: "NINA'S WORLD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien turpis convallis ac non morbi. Adipiscinglectus justo, sit ipsum morbi. Turpis eleifend tempusociis sagittis, ipsum sit. Augue pharetra, sit nisl massa tempor molestie duis. Suscipit congue molestieeget tortor. Quis mauris enim, augue nunc, porta. FFcilisis aenean in in sodales ut orci leo egestas suspendisse. Morbi sapien ornare ipsum sed. Lectus aliq uet urna posuere varius posuere.",
            shortDescription: "Publish by : Jenny",
            shortDescription2: " Sep-8-2002",
            backgroundImg: card2
        },
        {
            id: 3,
            title: "SCAM ALERT",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien turpis convallis ac non morbi. Adipiscing lectus justo, sit ipsum morbi. Turpis eleifend tempussociis sagittis, ipsum sit. Augue pharetra, sit nisl massa tempor molestie duis. Suscipit congue molestieeget tortor. Quis mauris enim, augue nunc, porta. Fcilisis aenean in in sodales ut orci leo egestas suspendisse. Morbi sapien ornare ipsum sed. Lectus aliquet urna posuere varius posuere.",
            shortDescription: "Publish by : Jenny",
            shortDescription2: " Sep-8-2002",
            backgroundImg: card3
        },
        {
            id: 4,
            title: "NINA'S WORLD",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien turpis convallis ac non morbi. Adipiscinglectus justo, sit ipsum morbi. Turpis eleifend tempussociis sagittis, ipsum sit. Augue pharetra, sit nisl massa tempor molestie duis. Suscipit congue molestieeget tortor. Quis mauris enim, augue nunc, porta. Fcilisis aenean in in sodales ut orci leo egestas suspendisse. Morbi sapien ornare ipsum sed. Lectus aliquet urna posuere varius posuere.",
            shortDescription: "Publish by : Jenny",
            shortDescription2: " Sep-8-2002",
            backgroundImg: card2
        }
    ];

    return (
        <section className="w-screen min-h-screen bg-black">
<div className=" top-0 w-full">
                            <img src={redline} alt=""  />
                        </div>
            <div className="text-center mb-12 mt-10.5">
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: 'Rajdhani' }}>
                    SUPER NEWS
                </h1>
            </div>
            <div className="flex justify-center items-start ">
                {newsData.map((news, index) => (
                    <React.Fragment key={index}>
                        <NewsFile
                            news={news}
                        />
                        <div className="flex items-center h-[600px] ">
                            <img src={line} alt="" className="h-full w-auto" />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            
        </section>
    )
}

export default News