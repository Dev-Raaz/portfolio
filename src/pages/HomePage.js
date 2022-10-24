import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

// @User defined imports
import LetsConnect from '../components/pages/home/LetsConnect'
import Works from '../components/pages/home/Works'

const HomePage = () => {

  useEffect(() => {
    Aos.init({
      duration: 800,
      })
  })

  return (
    
      <main>
        <img src='/res/graphics/topgraphic.svg' alt='Top Graphic' className='top-graphic'/>
        {/* Introduction Section */}
        <section className='introduction'>
          <div className='header'>
              <h1 className='hi' data-aos='fade-down'>
                <span>Hi</span>
                <img className='hi-emoji' src='/res/graphics/wave.png' alt='Hi Emoji'/>
              </h1>
            <h1 className='para' data-aos='fade-up' >
            I'm <span className='prm-color'>Debraj Singh</span>
            <br/>A Web Developer</h1>

            <div className='btn-grp'>
              <a href='/Debraj Singh Resume.pdf' download>
              <button 
              className='btn-sec download-resume'>
                Download My Resume
                </button>
              </a>
              <a href='https://github.com/Dev-Raaz' 
              target='_blank' rel='noreferrer' 
              className='btn-icon github' data-aos='fade-left'>
                <img src='/res/socials/github.svg' alt='Github Icon'/>
              </a>
            </div>
          </div>

          <img className='hero-img' data-aos='fade-in' 
          src='/res/graphics/heroImg.svg' alt='Hero Graphics'/>
        </section>

        {/* Works Section */}
        <Works/>
        {/* Connect */}
        <LetsConnect/>
    </main>
  )
}

export default HomePage