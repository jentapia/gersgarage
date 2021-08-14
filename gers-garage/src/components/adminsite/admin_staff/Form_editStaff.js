import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
//import "react-datepicker/dist/react-datepicker.css";

import '../../../App.css';
 
function Form_editStaff (props) {
 
    console.log(props);
  let [staffDetails, setStaffDetails] = useState([]);
  const id = props.id;
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
 
  React.useEffect(() => {
    fetch('http://localhost:8080/staff/'+id, {
        method: 'GET',
                   
      }).then((response) => response.json())
      .then(data => {
        console.log(data)
                    
        if(data.status === '400'){
            alert(data.message);
           return;
        }
        setStaffDetails(data);
        setFirstname(data.firstname);
        setSurname(data.surname);
        setPhone(data.phone);
        setAddress(data.address);
            
      })
      .catch(error => {
      console.log(error);
      });
  }, []);
   
  function editstaff (){
      
    
    fetch('http://localhost:8080/editmember/'+id, {
        method: 'PUT',
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

            <Form.Group controlId="staff_id">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control type="text" placeholder={id} value={id} disabled/>
            </Form.Group>

            <Form.Group controlId="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder={staffDetails.firstname} value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder={staffDetails.surname} value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder={staffDetails.phone} value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder={staffDetails.address} value={address} onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>

                        
            <Button type="submit" bg="primary" variant="primary" onClick={editstaff}>
                Edit Staff Member
            </Button>
            
        </Form>
        
 
    )
    
  }
 
export default Form_editStaff;