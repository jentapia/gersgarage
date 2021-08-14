import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
 
 
function Admin_main(props) {
 
	const [bookings, setBookings] = useState([])

    React.useEffect(() => {
      fetch('http://localhost:8080/bookings', {
        method: 'GET',  
        
        }).then((response) => response.json())
        .then(data => {
            console.log(data)
            setBookings(data)
        })
        
      .catch(error => {
        console.log(error)
    });
    }, [])

    
 
	return(
        <div>
		<Table striped bordered hover>
            <thead>
                <tr>
                <th>Booking Id</th>
                <th>Date</th>
                <th>Booking Type</th>
                <th>Vehicle</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((item) =>(
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.booking_date}</td>
                    <td>{item.booking_type}</td>
                    <td>{item.vehicle_id}</td>
                    <td>{item.customer_id}</td>
                    <td>{item.booking_status}</td>
                    <td><Link to={`/editbooking/${item.id}`} >Edit</Link></td>
                    </tr>

                ))}

                
            </tbody>
        </Table>
        
        </div>         
	)
}
 
export default Admin_main;
