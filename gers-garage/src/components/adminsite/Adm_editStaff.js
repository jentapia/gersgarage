import React from 'react';
import { useParams } from 'react-router-dom'; 
import MenuAd from './admin_menu/MenuAd';
import Form_editStaff from './admin_staff/Form_editStaff';
 
function Adm_editStaff(props) {
 

    const {id} = useParams();
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Form_editStaff id={id}/>
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
}
 
export default Adm_editStaff;