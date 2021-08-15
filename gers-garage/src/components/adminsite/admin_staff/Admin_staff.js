import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
 
 
function Admin_staff(props) {
 
	const [staff, setStaff] = useState([])

    React.useEffect(() => {
      fetch('http://localhost:8080/stafflist', {
        method: 'GET',  
        
        }).then((response) => response.json())
        .then(data => {
            console.log(data)
            setStaff(data)
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
                            <th>Id Employee</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staff.map((item) =>(
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.firstname}</td>
                                <td>{item.surname}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td><Link to={`/editstaff/${item.id}`} >Edit</Link></td>
                                </tr>

                            ))}

                            
                        </tbody>
                    </Table>
                    <Button variant="outline-primary"><Link to={'/newstaff'}>Add a Staff Member</Link></Button>
                    </div>  
                    
	  		     
	)
}
 
export default Admin_staff;