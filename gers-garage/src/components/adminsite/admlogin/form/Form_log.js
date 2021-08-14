import React from 'react';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { withRouter} from 'react-router-dom'; 
import '../../../../App.css';

function Form_log (props) {
 
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    
    function validUser (){
      
        console.log("username: "+username, password);
        if (!username) {
            alert('Please fill Username');
            return;
          }
          if (!password) {
            alert('Please fill Password');
            return;
          }
    
        fetch('http://localhost:8080/admin/login?username='+username+'&password='+password, {
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
            }
              redirectToHome();
            
                
          })
          .catch(error => {
          console.log(error);
          });
      }

      const redirectToHome = () => {
        props.history.push('/homeadmin');
    }
 
    return (
 
        <Form>
            
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="password">
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