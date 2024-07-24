import React from 'react'
import { TypeAnimation } from "react-type-animation";
const Typeanimation = () => {
  return (
    <div className='mt-5' >
    <TypeAnimation 
    preRenderFirstString={true}
   sequence={[
     500,
     'Hello! I am Sarvesh Kumar ',
     1000,
    
     "Hello! I am Software Engineer",
     1000,
     "Hello! I am Backend Engineer",
     1000,
     "Hello! I am MERN DEVELOPER",
     500,
   ]}
   speed={10}
   style={{ fontSize: "2.4em", }}
   repeat={Infinity}
 />
    </div>
 
 
  )
}

export default Typeanimation