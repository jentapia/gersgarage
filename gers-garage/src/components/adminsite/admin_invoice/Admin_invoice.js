import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
 
 
function Admin_invoice(props) {
 
	const [invoices, setInvoices] = useState([])

    React.useEffect(() => {
      fetch('http://localhost:8080/invoicelist', {
        method: 'GET',  
        
        }).then((response) => response.json())
        .then(data => {
            console.log(data)
            setInvoices(data)
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
                            <th>Invoice Id</th>
                            <th>Date</th>
                            <th>Total Due</th>
                            <th>Vehicle</th>
                            <th>Customer</th>
                            <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((item) =>(
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.invoice_date}</td>
                                <td>{item.total_due}</td>
                                <td>{item.vehicle_id}</td>
                                <td>{item.customer_id}</td>
                                <td><Link to={`/editinvoice/${item.id}`} >Edit</Link></td>
                                </tr>

                            ))}

                            
                        </tbody>
                    </Table>
                    <Button>Create New Invoice</Button>
                    </div>  
                    
	  		     
	)
}
 
export default Admin_invoice;