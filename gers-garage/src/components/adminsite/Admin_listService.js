import React from 'react';
import MenuAd from './admin_menu/MenuAd';
import Admin_service from './admin_service/Admin_service';
 
class Admin_listService extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Admin_service />
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
	}
 
}
 
export default Admin_listService;