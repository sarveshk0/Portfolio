import React from 'react'
import './Projectcard.css'
const ProjectCards = () => {
 const Projects=[
    {
    id:1,
    name:"Resume_Builder Web App",
    Description:" web application built using React.js, enabling users to create and style professional resumes easily with dynamic form inputs and real-time preview.",
    image:"/images/resume.jpg",
    link:"https://resume-builder-indol-rho.vercel.app/",
  },
  {
    id:2,
    name:"Rozorpay HomePage Clone",
    Description:"A replicated version of the Razorpay payment gateway, developed using Tailwind CSS to enhance user experience and interface design.",
    image:"/images/rozor.jpg",
    link:"https://rojar-pay.vercel.app/",
  },
  {
    id:3,
    name:"Coming soon",
    Description:"",
    image:"coming soon",
    link:"",
  },

]
console.log(Projects);
  return (

    <div className=''>
    <h1 className='projectheading'>Projects:</h1>
    
    
        
        <section className="card-area m-5 ">

            {/* <!-- Card: City --> */}
        { 
          Projects.map((Project)=>(
            <div key={Project.id}>
                <section  className="card-section container ">
                <div className="card">
                    <div className="flip-card">
                        <div className="flip-card__container">
                            <div className="card-front">
                                <div className="card-front__tp card-front__tp--city">
                                 
                               <h2 className="card-front__heading">
                                {Project.name}
                            </h2>
                            {/* <p className="card-front__text-price">
                                From £29
                            </p> */}
                                </div>

                                <div className="card-front__bt">
                                    <p className="card-front__text-view card-front__text-view--city">
                                        View ME
                                    </p>
                                </div>
                            </div>
                            <div className="card-back">
                                 <div><img src={Project.image} width='235' height='235' alt="" /></div>
                                <video className="video__container" autoPlay muted loop>
                                    <source className="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="inside-page">
                        <div className="inside-page__container">
                            <h3 className="inside-page__heading inside-page__heading--city">
                                 {Project.name}
                            </h3>
                            <p className="inside-page__text">
                               {Project.Description}
                            </p>
                            <a href= {Project.link} className="inside-page__btn inside-page__btn--city">Link</a>
                        </div>
                    </div>
                </div>
            </section>
            </div>
          )
             
          )
        }

            

            
        </section>
        
  


    </div>
  
  )
}

export default ProjectCards