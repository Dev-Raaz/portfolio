import React from 'react'

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
              <a href='/#' className='works-n-more-card card-w-img'>
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

              <a href='/#' className='works-n-more-card'>
                <div className='name'>
                  <img src='/res/works/ethersensei.svg' alt='Ether Sensei Logo'/>
                  <h3>Ether Sensei</h3>
                </div>
                <p>An Education Website to teach people about 
                  <span className='prm-color'> Blockchain and Ethereum</span>.</p>
              </a>
          </div>
          
          <div className='works-n-more-grid-right'>
            <a href='/#' className='works-n-more-card'>
              <div className='name'>
                <img src='/res/works/devkitz.svg' alt='Dev Kitz Logo'/>
                <h3>Dev Kitz</h3>
              </div>
              <p>An website that <span className='prm-color'>recommends tools </span> 
              for different purpose to developers.</p>
            </a>

            <a href='/#' className='works-n-more-card card-w-img'>
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

        {/* Connect */}
        <section className='lets-connect'>
          <h1>Let's <span className='prm-color'>Connect</span></h1>
          <p>It doesn't have to end here let's get conencted !</p>

          <div className='connection-grid'>
            <a href='/#' className='social'>
              <img src='/res/socials/instagram.svg' alt='Instagram Logo'/>
            </a>
            <a href='/#' className='social'>
              <img src='/res/socials/linkedin.svg' alt='LinkedIn Logo'/>
            </a>
            <a href='/#' className='social'>
              <img src='/res/socials/twitter.svg' alt='Twitter Logo'/>
            </a>
            <a href='/#' className='social'>
              <img src='/res/socials/codepen.svg' alt='Codepen Logo'/>
            </a>
          </div>
        </section>
    </main>
  )
}

export default HomePage