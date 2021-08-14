import React from 'react';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { withRouter} from 'react-router-dom';
import '../../../App.css';
 
function Form_reg(props) {
 
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    function registerUser (){
      
        console.log(firstname, surname, mobile, email, password);
        if (!firstname) {
            alert('Please fill Firstname');
            return;
        }
        if (!surname) {
            alert('Please fill Surname');
            return;
        }
        if (!mobile) {
            alert('Please fill Mobile Phone');
            return;
        }
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }
    
        //fetch('http://localhost:8080/register?name='+firstname+'&surname='+surname+'&email='+email+'&mob_phone='+mobile+'&password='+password, {
        fetch('http://localhost:8080/registeruser', {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: firstname,
                surname: surname,
                email: email,
                mob_phone: mobile,
                password: password                
            })            
          }).then((response) => response.json())
          .then(data => {
            console.log(data)
                        
            if(data.status === '400'){
                alert(data.message);
               return;
            }
             redirectToLogin();   
          })
          .catch(error => {
          console.log(error);
          });
      }

      const redirectToLogin = () => {
        props.history.push('/login');
    }
 
    return (
 
        <Form>
            <Form.Group controlId="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="Enter firstname" value={firstname} required onChange={(e) => setFirstname(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter surname" value={surname} required onChange={(e) => setSurname(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="mob_phone">
                <Form.Label>Mobile Phone</Form.Label>
                <Form.Control type="text" placeholder="081234567" value={mobile} required onChange={(e) => setMobile(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="123@123.com" value={email} required onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            
            <Button type="submit" bg="dark" variant="dark" onClick={registerUser}>
                Submit
            </Button>
            
        </Form>
        
 
    )
    
  }
 
export default withRouter(Form_reg);