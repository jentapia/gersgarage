import React from 'react';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { withRouter} from 'react-router-dom';
import '../../../App.css';
 
function Form_staff(props) {
 
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
      

    function registerStaff (){
      
        console.log(firstname, surname, phone);
        if (!firstname) {
            alert('Please fill Firstname');
            return;
        }
        if (!surname) {
            alert('Please fill Surname');
            return;
        }
        if (!phone) {
            alert('Please fill Mobile Phone');
            return;
        }
        if (!address) {
            alert('Please fill Address');
            return;
        }
            
        //fetch('http://localhost:8080/register?name='+firstname+'&surname='+surname+'&email='+email+'&mob_phone='+mobile+'&password='+password, {
        fetch('http://localhost:8080/newstaff', {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                surname: surname,
                phone: phone,
                address: address             
            })            
          }).then((response) => response.json())
          .then(data => {
            console.log(data)
                        
            if(data.status === '400'){
                alert(data.message);
               return;
            }
             redirectToList();   
          })
          .catch(error => {
          console.log(error);
          });
      }

      const redirectToList = () => {
        props.history.push('/liststaff');
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

            <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" value={phone} required onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Enter an address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>
                        
            <Button type="submit" bg="primary" variant="primary" onClick={registerStaff}>
                Submit
            </Button>
            
        </Form>
        
 
    )
    
  }
 
export default withRouter(Form_staff);