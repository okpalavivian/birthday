import React from 'react'
import "./hero.css"
import Pix from "../../../src/img/pix.png"
const Hero = () => {
  return (
<>
<div className="hero">
    <div className='left'>left</div>
    <div className='center'>center</div>
    <div className='right'>
        <img src= {Pix} alt=''/>
</div>

    </div></>
  )
}

export default Hero
