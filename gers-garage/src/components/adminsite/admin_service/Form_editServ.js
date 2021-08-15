import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
//import "react-datepicker/dist/react-datepicker.css";

import '../../../App.css';
 
function Form_editServ (props) {
 
    console.log(props);
  let [servDetails, setServDetails] = useState([]);
  const id = props.id;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
    
 
  React.useEffect(() => {
    fetch('http://localhost:8080/service/'+id, {
        method: 'GET',
                   
      }).then((response) => response.json())
      .then(data => {
        console.log(data)
                    
        if(data.status === '400'){
            alert(data.message);
           return;
        }
        setServDetails(data);
        setName(data.name);
        setDescription(data.description);
        setCost(data.cost);
                    
      })
      .catch(error => {
      console.log(error);
      });
  }, []);
   
  function editservice (){
      
    
    fetch('http://localhost:8080/editservice/'+id, {
        method: 'PUT',
        headers : { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
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
                    
      })
      .catch(error => {
      console.log(error);
      });
  }

    return (
 
        <Form>

            <Form.Group controlId="service_id">
                <Form.Label>Service ID</Form.Label>
                <Form.Control type="text" placeholder={id} value={id} disabled/>
            </Form.Group>

            <Form.Group controlId="firstname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder={name} value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control  as="textarea" rows={2} placeholder={description} value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control type="text" placeholder={servDetails.phone} value={cost} onChange={(e) => setCost(e.target.value)}/>
            </Form.Group>

                                    
            <Button type="submit" bg="primary" variant="primary" onClick={editservice}>
                Edit Service
            </Button>
            
        </Form>
        
 
    )
    
  }
 
export default Form_editServ;