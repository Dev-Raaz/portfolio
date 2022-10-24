import React from 'react'


const Works = () => {
  return (
    <section className='works-n-more' id='works-n-more'>
          {/* Headers */}
          <div className='section-top'>
            <img className='middle-graphics' src='/res/graphics/middlegraphic.svg' alt='Middle Graphics'/>
            <div className='header-grp'>
              <h1 className='works-n-more-header' data-aos='fade-up'>
              <span className='prm-color'>Recent</span> Works
              </h1>
              <p className='works-n-more-text' data-aos='fade-up' data-aos-delay='200'>
              Here are all the works and open source <br/> contributions that I have done.
              </p>
            </div>
          </div>

          {/* Works n More Grids */}
          <div className='works-n-more-grid-left'>

              {/* CodeSimp */}
              <a href='https://errorsensei.netlify.app'
              target='_blank'
              rel='noreferrer' 
              className='works-n-more-card card-w-img'  data-aos='fade-up' data-aos-delay='400'>
                <div>
                  <div className='name'>
                    <img src='/res/works/errorsensei.svg' alt='Error Sensei Logo'/>
                    <h3>Error Sensei</h3>
                  </div>
                  <p>
                    An <span className='prm-color'>Blog Website</span>, 
                    where I post about common bug solutions that I discover
                    while making web apps.
                  </p>
                </div>
                <img src='/res/works/errorsenseiView.png' alt='Card Graphics'/>
              </a>

              {/* Krypt Verse */}
              <a href='https://kryptverse.netlify.app' 
              target='_blank'
              rel='noreferrer'
              className='works-n-more-card' data-aos='fade-up' data-aos-delay='500'>
                <div className='name'>
                  <img src='/res/works/kryptverse.svg' alt='Ether Sensei Logo'/>
                  <h3>Krypt Verse</h3>
                </div>
                <p>A crypto website where you can view stats and news about
                  <span className='prm-color'> top 100 Crypto</span>  Currencies.</p>
              </a>
          </div>
          
          {/* COMING SOOON . . . */}
          <div className='works-n-more-grid-left'>
            {
              // Devkitz 
            }
            {/* <a href='/#' 
            target='_blank'
            rel='noreferrer'
            className='works-n-more-card'>
              <div className='name'>
                <img src='/res/works/devkitz.svg' alt='Dev Kitz Logo'/>
                <h3>Dev Kitz</h3>
              </div>
              <p>An website that <span className='prm-color'>recommends tools </span> 
              for different purpose to developers.</p>
            </a> */}

            {
              // Error Sensei
              }
            <a href='https://www.oloojastore.com/'
            target='_blank'
            rel='noreferrer' 
            className='works-n-more-card card-w-img'>
              <div>
                <div className='name'>
                  <img src='/res/works/oloojalogo.svg' alt='Error Sensei Logo'/>
                  <h3>Olooja Store</h3>
                </div>
                <p>
                  Olooja Store is a multivendor E-Commerce platform, that helps 
                  <span className='prm-color'> Black Business Owners</span> to
                  sell online and grow.
                </p>
              </div>
              {
                // Image
              }
              <img src='/res/works/oloojastore.webp' alt='Card Graphics'/>
            </a>
          </div>
        </section>

  )
}

export default Works