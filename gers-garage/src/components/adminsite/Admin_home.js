import React from 'react';
 
import MenuAd from './admin_menu/MenuAd';
import Admin_main from './admin_home/Admin_main';
 
class Admin_home extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Admin_main />
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
	}
 
}
 
export default Admin_home;