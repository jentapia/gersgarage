import React from 'react';
import MenuAd from './admin_menu/MenuAd';
import Form_serv from './admin_service/Form_serv';

 
function Adm_newServ() {
 
	 
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Form_serv/>
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
	
 
}
 
export default Adm_newServ;