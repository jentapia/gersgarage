import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
 
 
function Admin_service(props) {
 
	const [services, setServices] = useState([])

    React.useEffect(() => {
      fetch('http://localhost:8080/servicelist', {
        method: 'GET',  
        
        }).then((response) => response.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
        
      .catch(error => {
        console.log(error)
    });
    }, [])

    const redirectToNewService = () => {
        props.history.push('/newservice');
    }
    
 
	return(

        		  	  		
		  	        <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Service Id</th>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Cost</th>
                            <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((item) =>(
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.cost}</td>
                                <td><Link to={`/editservice/${item.id}`} >Edit</Link></td>
                                </tr>

                            ))}

                            
                        </tbody>
                    </Table>
                    <Button variant="outline-primary"><Link to={'/newservice'}>Add a new Service</Link></Button>
                    {/* <Button onClick={redirectToNewService}>Add a new Service</Button> */}
                    </div>  
                    
	  		     
	)
}
 
export default Admin_service;