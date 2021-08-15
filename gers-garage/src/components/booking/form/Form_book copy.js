import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import DatePicker from "react-datepicker";
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
  const [booking_type, setBooking_type] = useState("");
  //const [booking_date, setBooking_date] = useState("");
  const [comments, setComments] = useState("");
  //const [email, setEmail] = useState("juan@juan.cl");
  const email = props.email;
  const brandsData = require('../../../brands.json'); 
  //const listBrand=["Audi", "Aston Martin", "BMW", "Ford", "Mercedes-Benz", ];
  console.log(brandsData);
  const [selectedDate, setSelectedDate] = useState(new Date());

 
  
  function booking1 (){
      
    if (!lic_plate) {
        alert('Please fill Licence Plate');
        return;
    }
    if (!veh_type) {
        alert('Please fill Vehicle Type');
        return;
    }
    if (!veh_make) {
        alert('Please fill Vehicle Brand');
        return;
    }    
    if (!veh_model) {
        alert('Please fill Vehicle Model');
        return;
    }
    if (!veh_year) {
        alert('Please fill Vehicle Year');
        return;
    }
    if (!engine) {
        alert('Please fill Engine Type');
        return;
    }
    if (!booking_type) {
        alert('Please fill Booking Type');
        return;
    }
    
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
            engine: engine,
           
        })            
      }).then((response) => response.json())
      .then(data => {
        console.log(data)
                    
        if(data.status === '400'){
            alert(data.message);
           return;
        }
        fetch('http://localhost:8080/registerbooking2?email='+email+'&lic_plate='+lic_plate, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            booking_type: booking_type,
            booking_date: selectedDate,
            booking_status: "Booked",
            comments: comments
                           
        })            
      }).then((response) => response.json())
      .then(data => {
        console.log(data)
                    
        if(data.status === '400'){
            alert(data.message);
           return;
        }
        
        redirectToHome();
            
      })
      .catch(error => {
      console.log(error);
      });
        //redirectToHome();
            
      })
      .catch(error => {
      console.log(error);
      });
  }

  let validate = (e) => {
    console.log(e);
    let reg = /^[0-9]+$/;     //pattern   
    

    if (reg.test(e) === false) {   //test the input with the pattern above described (input by input)
      console.log("Is not a number"); 
      setVeh_year('');
      return false;
    }
    else {
      //valid number
      setVeh_year(e);
      console.log("Is a number");
    }
  }

  const redirectToHome = () => {
    props.history.push('/');
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
                <Form.Control as="select" value={veh_make} onChange={(e) => setVeh_make(e.target.value)}>
                    <option value="" disabled></option>
                    {brandsData.map((option) =>(
                        <option value={option.name}>{option.name}</option>
                    ))}
                </Form.Control>
            </Form.Group>

            {/* <Form.Group controlId="vehicle_make">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="Enter brand" value={veh_make} onChange={(e) => setVeh_make(e.target.value)}/>
            </Form.Group> */}

            <Form.Group controlId="vehicle_model">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Enter model" value={veh_model} onChange={(e) => setVeh_model(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="vehicle_year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter year" value={veh_year} onChange={(e) => validate(e.target.value)}/>
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

            <Form.Group controlId="booking_type">
                <Form.Label>Booking Type</Form.Label>
                <Form.Control as="select" value={booking_type} onChange={(e) => setBooking_type(e.target.value)}>
                    <option value="" disabled></option>
                    <option>Annual Service</option>
                    <option>Major Service</option>
                    <option>Repair/Fault</option>
                    <option>Major Repair</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="comments">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} value={comments} onChange={(e) => setComments(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <DatePicker selected={selectedDate} 
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy" 
                minDate={new Date()}
                filterDate={date => date.getDay() !== 0}/>
            </Form.Group>

            <Button type="submit" bg="dark" variant="dark" onClick={booking1}>
                Submit
            </Button>
            
        </Form>
        
 
    )
    
  }

 
export default withRouter(Form_book);