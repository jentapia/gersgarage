import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import "react-datepicker/dist/react-datepicker.css";
import { withRouter} from 'react-router-dom';

import '../../../App.css';
 
function Form_book(props) {
 
  const [lic_plate, setLic_Plate] = useState("");
  const [veh_type, setVeh_type] = useState("");
  const [veh_make, setVeh_make] = useState("");
  const [veh_model, setVeh_model] = useState("");
  const [veh_year, setVeh_year] = useState("");
  const [engine, setEngine] = useState("");
  const [email, setEmail] = useState("juan@juan.cl");

  function booking1 (){
      
    if (!lic_plate) {
        alert('Please fill Licence Plate');
        return;
    }
    if (!veh_make) {
        alert('Please fill Password');
        return;
    }

    //fetch('http://localhost:8080/register?name='+firstname+'&surname='+surname+'&email='+email+'&mob_phone='+mobile+'&password='+password, {
    fetch('http://localhost:8080/registervehicle?email='+email, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            licplate: lic_plate,
            vehicle_type: veh_type,
            veh_make: veh_make,
            veh_model: veh_model,
            veh_year: veh_year,
            engine: engine                
        })            
      }).then((response) => response.json())
      .then(data => {
        console.log(data)
                    
        if(data.status === '400'){
            alert(data.message);
           return;
        }
        redirectToBooking2();
            
      })
      .catch(error => {
      console.log(error);
      });
  }

  const redirectToBooking2 = () => {
    props.history.push('/booking2');
}

    return (
 
        <Form>

            <Form.Group controlId="licence_plate">
                <Form.Label>Licence Plate</Form.Label>
                <Form.Control type="text" placeholder="Enter licence plate" value={lic_plate} onChange={(e) => setLic_Plate(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="vehicle_type">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Control as="select" value={veh_type} onChange={(e) => setVeh_type(e.target.value)}>
                    <option value="" disabled></option>
                    <option>Car</option>
                    <option>Motorbike</option>
                    <option>Van</option>
                    <option>Small Bus</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="vehicle_make">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="Enter brand" value={veh_make} onChange={(e) => setVeh_make(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="vehicle_model">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Enter model" value={veh_model} onChange={(e) => setVeh_model(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="vehicle_year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter year" value={veh_year} onChange={(e) => setVeh_year(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="engine">
                <Form.Label>Engine</Form.Label>
                <Form.Control as="select" value={engine} onChange={(e) => setEngine(e.target.value)}>
                    <option value="" disabled></option>
                    <option>Diesel</option>
                    <option>Petrol</option>
                    <option>Hybrid</option>
                    <option>Electric</option>
                </Form.Control>
            </Form.Group>

            <Button type="submit" bg="dark" variant="dark" onClick={booking1}>
                Next
            </Button>
            
        </Form>
        
 
    )
    
  }

 
export default withRouter(Form_book);