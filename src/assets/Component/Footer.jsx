import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (

    <footer className="footer ">
     <div style={{display:'flex', alignContent:'center', justifyContent:'center', gap:40, fontSize:20, padding:20}}>
        <a href=" https://github.com/sarveshk0"><FaGithub/></a>
    
    <a href="https://www.linkedin.com/in/sarvesh-kumar-674637217/"><FaLinkedin/></a>
    <a href="https://twitter.com/kumarsarvesh105"><BsTwitterX/></a>
    <a href="https://www.instagram.com/sarveshk0/"><FaInstagramSquare/></a>
    <a href="https://www.facebook.com/sarvesh.sarvesh.7771"><FaFacebook/></a>
    
        </div>

        
    
    <p className="footer-text">9793280126/kumarsarvesh105@gmail.com</p>
    <p className="footer-text">&copy; Proudly Made With Love</p>

  </footer>
  )
}

export default Footer