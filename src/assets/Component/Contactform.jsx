import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contactform.css'
const Contact = () => {
  return (
     <div className='container '>
         <div className='headingContact'>Contact Me:</div>
          <div className='content'>
          <img src="/images/contactform.jpg" width='500'  alt="" />
      <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Name:</Form.Label>
         <Form.Control style={{backgroundColor:'black' ,color:'white'}} type="email" placeholder="Enter  Name" />
       
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email:</Form.Label>
         <Form.Control style={{backgroundColor:'black' ,color:'white'}} type="email" placeholder="Enter  Email" />
       
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Message:</Form.Label>
         <Form.Control style={{backgroundColor:'black' ,color:'white'}} as="textarea" rows={4} placeholder="Enter Your Message" />
       
       </Form.Group>
      

      

   

       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
       <Button variant="primary" type="submit">
         Submit
      </Button>
        </Form>
          </div>
    
          </div>
     
   
   
   
  //  <div className='container d-flex flex-direction-coloum '>
  //      {/* */}
  //      <div className=' '>
  //       
  //         <div>
  //         </div> 
          
  //      </div>
     
  //   </div>
   
  )
}

export default Contact