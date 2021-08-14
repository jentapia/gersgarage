import React from 'react';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { withRouter} from 'react-router-dom'; 
import '../../../App.css';
 
function Form_log(props) {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validUser (){
      
        console.log("email: "+email, password);
        if (!email) {
            alert('Please fill Email');
            return;
          }
          if (!password) {
            alert('Please fill Password');
            return;
          }
    
        fetch('http://localhost:8080/login?email='+email+'&password='+password, {
          method: 'GET'            
          }).then((response) => response.json())
          .then(data => {
            console.log(data)
            if(data.message === "User does not exist"){
              alert(data.message);
              return;
            }else if(data.message==="Credentials do not match"){
              alert(data.message);
              return;
            }else{
              redirectToBooking();
            }
                
          })
          .catch(error => {
          console.log(error);
          });
      }

      const redirectToBooking = () => {
        props.history.push(`/booking/${email}`);
    }
 
  
 
    return (
 
        <Form>
            
            <Form.Group controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            
            <Button type="submit" bg="dark" variant="dark" onClick={validUser}>
                Login
            </Button>
            
        </Form>
        
 
    )
    
  }
  
export default withRouter(Form_log);