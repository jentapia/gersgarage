import React from 'react';
import { useParams } from 'react-router-dom'; 
import MenuAd from './admin_menu/MenuAd';
import Form_admBook from './admin_booking/Form_admBook';
 
function Adm_booking() {
 
	const {id} = useParams();
	
 
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Form_admBook id={id}/>
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
	
 
}
 
export default Adm_booking;