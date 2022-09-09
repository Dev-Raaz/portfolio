import React from 'react'

// @User defined imports
import LetsConnect from '../components/pages/home/LetsConnect'
import Works from '../components/pages/home/Works'

const HomePage = () => {

  return (
    <main>
        <img src='/res/graphics/topgraphic.svg' alt='Top Graphic' className='top-graphic'/>
        {/* Introduction Section */}
        <section className='introduction'>
          <div className='header'>
            <h1 className='hi'>
              <span>Hi</span>
              <img className='hi-emoji' src='/res/graphics/wave.png' alt='Hi Emoji'/>
            </h1>
            <h1 className='para'>I'm <span className='prm-color'>Debraj Singh</span>
            <br/>A Full-Stack Web Developer</h1>

            <div className='btn-grp'>
              <button className='btn-sec download-resume'>Download My Resume</button>
              <button className='btn-icon github'>
                <img src='/res/socials/github.svg' alt='Github Icon'/>
              </button>
            </div>
          </div>

          <img className='hero-img' src='/res/graphics/heroImg.svg' alt='Hero Graphics'/>
        </section>

        {/* Works Section */}
        <Works/>
        {/* Connect */}
        <LetsConnect/>
    </main>
  )
}

export default HomePage