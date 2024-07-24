import React from "react"; 
import './Hero.css'


const Hero = () => {
const handlepdf=()=>{
  const link = document.createElement('a');
  link.href = `/images/resume.pdf`;
  link.download = 'resume.pdf';
  link.click();
}

  return (
    <div className=" container hero"> 
         
         
         
        <div className="left ">
       <div className="desc">
       I am a passionate 4th year B.Tech student and a committed software developer with a strong foundation in web development and software engineering. My technical expertise includes HTML, CSS, Java, Tailwind CSS, React.js, Node.js, Firebase, and MongoDB. Over the course of my academic career, I have developed several impactful projects, such as a resume builder web app, a Razorpay clone using Tailwind CSS, and a project integrating HTML, CSS, and Firebase.

I am currently enhancing my skills with Next.js and three.js, and I am actively working on optimizing the page load speed of my school's website. My interest in AI and software frameworks in software project management drives me to continuously learn and innovate. I am also well-versed in IEEE POSIX threads and distributed MIMD architecture.

Beyond my technical pursuits, I am an active member of my college's coding club, where I collaborate with peers to solve complex problems and share knowledge. My dedication to my studies and extracurricular activities has been recognized with the prestigious Karmyogi Scholarship.

I am excited about the opportunities to apply my skills in dynamic and challenging environments, contributing to impactful projects and furthering my growth as a software developer.
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed voluptas distinctio atque ipsa temporibus quae aliquid dolores, aperiam soluta quod ad iste molestiae laborum nisi iure! Veniam, rerum. Totam ipsa impedit, laudantium nihil unde necessitatibus cum magni laboriosam similique a quae inventore eos illum soluta in tenetur quod sed? */}
       </div>
     

       
          </div>


          <div className="right">
                <div className="glow-box">
                  <div className="imgbox"><img src='/images/photo.png.jpg' width={280} style={{borderRadius:'50%'}} alt="img" 
                    /></div> 
                 
                </div>
                <button onClick={handlepdf}>Download Resume</button>
                   
        </div>
          
          

      

        
    
        
         
          
       
         
        
           
           
           
           
          
           
          
              
        

            
          </div>

      
    
     
      
    
  );
};

export default Hero;
