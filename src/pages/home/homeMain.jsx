import React from 'react'
import Home from '../../components/home/home'
import Story from '../../components/story/story'
import Game from '../../components/game/game'
import MetaVerse from '../../components/meta/metaVerse'
import Partners from '../../components/partners/partners'
import Ai from '../../components/ai/ai'
import News from '../../components/news/news'
// import Publish from '../../components/publish/publish'
import Squad from '../../components/squad/squad'
import Faq from '../../components/faq/faq'
import Super from '../../components/super/super'
import Token from '../../components/token/token'
import Roadmap from '../../components/roadmap/roadmap'
import PublishV2 from '../../components/publish/publishV2'


function homeMain() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <div className="w-full">
        <Home />
      </div>
      <div className="w-full">
        <Story />
      </div>
      <div className="w-full">
        <Game />
      </div>
      <div className="w-full">
        <MetaVerse />
      </div>
      <div className="w-full">
        <Roadmap />
      </div>
      <div className="w-full">
        <Super />
      </div>
      <div className="w-full">
        <Token />
      </div>
      <div className="w-full">
        <Partners />
      </div>
      <div className="w-full">
        <Ai />
      </div>
      <div className="w-full">
        <News />
      </div>
      <div className="w-full">
        <PublishV2 />
      </div>
      <div className="w-full">
        <Squad />
      </div>
      <div className="w-full">
        <Faq />
      </div>
    </main>
  )
}

export default homeMain
