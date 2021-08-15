import React from 'react';
import MenuAd from './admin_menu/MenuAd';
import Form_staff from './admin_staff/Form_staff';

 
function Adm_newStaff() {
 
	 
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Form_staff/>
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
	
 
}
 
export default Adm_newStaff;