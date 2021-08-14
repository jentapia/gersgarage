import React from 'react';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { withRouter} from 'react-router-dom';
import '../../../App.css';
 
function Form_serv(props) {
 
    const [serv_name, setServname] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setcost] = useState("");
      

    function registerServ (){
      
        console.log(serv_name, description, cost);
        if (!serv_name) {
            alert('Please fill Firstname');
            return;
        }
        if (!description) {
            alert('Please fill Surname');
            return;
        }
        if (!cost) {
            alert('Please fill Mobile Phone');
            return;
        }
            
        //fetch('http://localhost:8080/register?name='+firstname+'&surname='+surname+'&email='+email+'&mob_phone='+mobile+'&password='+password, {
        fetch('http://localhost:8080/newservice', {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: serv_name,
                description: description,
                cost: cost                
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
        props.history.push('/listservices');
    }
 
    return (
 
        <Form>
            <Form.Group controlId="serv_name">
                <Form.Label>Service Name</Form.Label>
                <Form.Control type="text" placeholder="Enter firstname" value={serv_name} required onChange={(e) => setServname(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter surname" value={description} required onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control type="text" placeholder="Euros" value={cost} required onChange={(e) => setcost(e.target.value)}/>
            </Form.Group>

                        
            <Button type="submit" bg="primary" variant="primary" onClick={registerServ}>
                Submit
            </Button>
            
        </Form>
        
 
    )
    
  }
 
export default withRouter(Form_serv);