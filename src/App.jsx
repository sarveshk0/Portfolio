
import "./App.css";
import Hero from "./assets/Component/Hero.jsx"
import Aboutme from "./assets/Component/Aboutme.jsx";
import Navbar from "./assets/Component/Navbar";
import ProjectCards from "./assets/Component/ProjectCards.jsx";
import Contactform from "./assets/Component/Contactform.jsx";
import Footer from "./assets/Component/Footer.jsx"
import Typeanimation from "./assets/Component/Typeanimation.jsx";




const App=() =>{
  return (
    
    <div className="container fixed background-wrap">
          <div className="bubble x1"></div>
    <div className="bubble x2"></div>
    <div className="bubble x3"></div>
    <div className="bubble x4"></div>
    <div className="bubble x5"></div>
    <div className="bubble x6"></div>
    <div className="bubble x7"></div>
    <div className="bubble x8"></div>
    <div className="bubble x9"></div>
    <div className="bubble x10"></div>
    <div className="bubble x1"></div>
    <div className="bubble x2"></div>
    <div className="bubble x3"></div>
    <div className="bubble x4"></div>
    <div className="bubble x5"></div>
    <div className="bubble x6"></div>
    <div className="bubble x7"></div>
    <div className="bubble x8"></div>
    <div className="bubble x9"></div>
    <div className="bubble x10"></div>
         <Navbar/>
         <Typeanimation/>
        <Hero/>
        <Aboutme/>
        
  
       
       <ProjectCards/>
        <Contactform/>
        
      <Footer/>

     {/* 1. Header:
Navigation Menu: Links to different sections of the portfolio (e.g., Home, About, Projects, Contact).
Logo/Name: Your personal brand or logo.
2. Hero Section:
Introduction: A brief introduction or tagline that summarizes who you are.
Profile Picture: A professional photo of yourself.
Call to Action: A button or link to download your resume or contact you.
3. About Me:
Biography: A detailed introduction about yourself, your background, and your interests.
Skills: A list of your technical and soft skills, often displayed with icons or progress bars.
Experience: A brief overview of your professional experience and education.
4. Projects:
Project Cards/Sections: Individual sections or cards for each project with a brief description, technologies used, and a link to the live project or GitHub repository.
Images/Videos: Screenshots or demo videos of your projects.
5. Resume:
Downloadable PDF: A button or link to download your resume in PDF format.
Interactive Resume: A section where users can view your resume details directly on the website.
6. Testimonials:
Quotes: Feedback or testimonials from clients, colleagues, or mentors.
Ratings: Visual representation of ratings (e.g., stars) if applicable.
7. Blog/Articles:
Posts: Links to your blog posts or articles if you write about your field or interests.
Summaries: Brief summaries of each post with a read more link.
8. Contact:
Contact Form: A form for visitors to send you a message directly through the website.
Social Media Links: Icons linking to your social media profiles (LinkedIn, GitHub, Twitter, etc.).
Email Address: Your email address for direct contact.
9. Footer:
Quick Links: Links to important sections of your portfolio.
Copyright Information: A copyright notice and any other relevant legal information.
Back to Top Button: A button to quickly navigate back to the top of the page.
10. Additional Components (Optional):
Portfolio Showcase: A carousel or grid showcasing your best work.
Interactive Elements: Animations or interactive components that enhance the user experience.
Search Functionality: A search bar to quickly find specific projects or articles.
Language Selector: If your portfolio is multilingual, a way to switch languages. */}
  
  </div>
    
   
   
     
    
  )
}
export default App;