import React from 'react';
import { useParams } from 'react-router-dom'; 
import MenuAd from './admin_menu/MenuAd';
import Form_editServ from './admin_service/Form_editServ';


function Adm_editServ(props) {
 

    const {id} = useParams();
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Form_editServ id={id}/>
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
}

export default Adm_editServ;