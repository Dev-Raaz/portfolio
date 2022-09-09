import React from 'react'

const LetsConnect = () => {
  return (
    <section className='lets-connect'>
          <h1>Let's <span className='prm-color'>Connect</span></h1>
          <p>It doesn't have to end here let's get conencted !</p>

          <div className='connection-grid'>
            <a href='https://www.instagram.com/dev.webdev'
            target='_blank'
            rel='noreferrer' 
            className='social'>
              <img src='/res/socials/instagram.svg' alt='Instagram Logo'/>
            </a>
            <a href='https://www.linkedin.com/in/debrajsingh'
            target='_blank'
            rel='noreferrer' 
            className='social'>
              <img src='/res/socials/linkedin.svg' alt='LinkedIn Logo'/>
            </a>
            <a href='https://twitter.com/tweetingwebdev'
            target='_blank'
            rel='noreferrer' 
            className='social'>
              <img src='/res/socials/twitter.svg' alt='Twitter Logo'/>
            </a>
            <a href='https://devwebdev.hashnode.dev'
            target='_blank'
            rel='noreferrer' 
            className='social'>
              <img src='/res/socials/hashnode.svg' alt='Hashnode Logo'/>
            </a>
          </div>
        </section>
  )
}

export default LetsConnect