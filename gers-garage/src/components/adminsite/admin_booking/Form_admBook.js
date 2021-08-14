import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import "react-datepicker/dist/react-datepicker.css";

import '../../../App.css';
 
function Form_admBook (props) {
 
    console.log(props);
  let [bookingDetails, setBookingDetails] = useState([]);
  const id = props.id;
  //const [booking_type, setBooking_type] = useState("");
  //const [booking_date, setBooking_date] = useState("");
  const [booking_status, setBooking_status] = useState("");
  //const [comments, setComments] = useState("");
  
 
  React.useEffect(() => {
    fetch('http://localhost:8080/bookings/'+id, {
        method: 'GET',
                   
      }).then((response) => response.json())
      .then(data => {
        console.log(data)
                    
        if(data.status === '400'){
            alert(data.message);
           return;
        }
        setBookingDetails(data);
            
      })
      .catch(error => {
      console.log(error);
      });
  }, []);
   
  function booking2 (){
      
    
    fetch('http://localhost:8080/editbooking/'+id, {
        method: 'PUT',
        headers : { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            booking_type: bookingDetails.booking_type,
            booking_date: bookingDetails.booking_date,
            booking_status: booking_status,
            comments: bookingDetails.comments,
            customer_id: bookingDetails.customer_id,
            vehicle_id: bookingDetails.vehicle_id            
        })            
      }).then((response) => response.json())
      .then(data => {
        console.log(data)
                    
        if(data.status === '400'){
            alert(data.message);
           return;
        }
        //redirectToAdmin();
            
      })
      .catch(error => {
      console.log(error);
      });
  }

    // const redirectToAdmin = () => {
    // props.history.push('/homeadmin');
    // }

    return (
 
        <Form>

            <Form.Group controlId="booking_id">
                <Form.Label>Booking ID</Form.Label>
                <Form.Control type="text" placeholder={id} value={id} disabled/>
            </Form.Group>

            <Form.Group controlId="booking_type">
                <Form.Label>Booking Type</Form.Label>
                <Form.Control type="text" placeholder={bookingDetails.booking_type} value={bookingDetails.booking_type} disabled/>
            </Form.Group>

            <Form.Group controlId="booking_status">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" placeholder={bookingDetails.booking_status} value={booking_status} onChange={(e) => setBooking_status(e.target.value)}>
                    <option>{bookingDetails.booking_status}</option>
                    <option>Booked</option>
                    <option>In Service</option>
                    <option>Fixed/Completed</option>
                    <option>Collected</option>
                    <option>Unrepairable/Scraped</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="vehicle_id">
                <Form.Label>Licence Plate</Form.Label>
                <Form.Control type="text" placeholder={bookingDetails.vehicle_id} value={bookingDetails.vehicle_id} disabled/>
            </Form.Group>

            <Form.Group controlId="vehicle_id">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control type="text" placeholder={bookingDetails.customer_id} value={bookingDetails.customer_id} disabled/>
            </Form.Group>

            <Form.Group controlId="comments">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder={bookingDetails.comments} value={bookingDetails.comments} disabled/>
            </Form.Group>

            <Form.Group controlId="booking_date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder={bookingDetails.booking_date} value={bookingDetails.booking_date} disabled/>
            </Form.Group>

            
            <Button type="submit" bg="dark" variant="dark" onClick={booking2}>
                Submit
            </Button>
            
        </Form>
        
 
    )
    
  }
 
export default Form_admBook;