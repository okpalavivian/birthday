import React from 'react'
import "./hero.css"
const Hero = () => {
  return (
<>
<div className="hero">
    <div className='left'>left</div>
    <div className='center'>center</div>
    <div className='right'>
        <img src="/img/pix.png" alt=''/>
</div>
<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,224C640,181,800,107,960,112C1120,117,1280,203,1360,245.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div>
    </div></>
  )
}

export default Hero
