import React from 'react'

const Works = () => {
  return (
    <section className='works-n-more' id='works-n-more'>
          <div className='section-top'>
            <img className='middle-graphics' src='/res/graphics/middlegraphic.svg' alt='Middle Graphics'/>
            <div className='header-grp'>
              <h1 className='works-n-more-header'><span className='prm-color'>Works</span> {'&'} More</h1>
              <p className='works-n-more-text'>Here are all the works and open source <br/> contributions that I have done.</p>
            </div>
          </div>

          {/* Works n More Grids */}
          <div className='works-n-more-grid-left'>

              {/* CodeSimp */}
              <a href='/#'
              target='_blank'
              rel='noreferrer' 
              className='works-n-more-card card-w-img'>
                <div>
                  <div className='name'>
                    <img src='/res/works/codesimp.svg' alt='Code Simp Logo'/>
                    <h3>Code Simp</h3>
                  </div>
                  <p>
                    An <span className='prm-color'>Educational Website</span>, 
                    that provides hands on coding tips and tricks.
                  </p>
                </div>
                <img src='/res/works/default-work.svg' alt='Card Graphics'/>
              </a>

              {/* Ether Sensei */}
              <a href='/#' 
              target='_blank'
              rel='noreferrer'
              className='works-n-more-card'>
                <div className='name'>
                  <img src='/res/works/ethersensei.svg' alt='Ether Sensei Logo'/>
                  <h3>Ether Sensei</h3>
                </div>
                <p>An Education Website to teach people about 
                  <span className='prm-color'> Blockchain and Ethereum</span>.</p>
              </a>
          </div>
          
          <div className='works-n-more-grid-right'>
            {/* Devkitz */}
            <a href='/#' 
            target='_blank'
            rel='noreferrer'
            className='works-n-more-card'>
              <div className='name'>
                <img src='/res/works/devkitz.svg' alt='Dev Kitz Logo'/>
                <h3>Dev Kitz</h3>
              </div>
              <p>An website that <span className='prm-color'>recommends tools </span> 
              for different purpose to developers.</p>
            </a>

            {/* Error Sensei */}
            <a href='https://errorsensei.netlify.app'
            target='_blank'
            rel='noreferrer' 
            className='works-n-more-card card-w-img'>
              <div>
                <div className='name'>
                  <img src='/res/works/errorsensei.svg' alt='Error Sensei Logo'/>
                  <h3>Error Sensei</h3>
                </div>
                <p>
                  A website that helps dev with solutions to common 
                  <span className='prm-color'> bugs and errors.</span>
                </p>
              </div>
              {/* Image */}
              <img src='/res/works/default-work.svg' alt='Card Graphics'/>
            </a>
          </div>
        </section>

  )
}

export default Works