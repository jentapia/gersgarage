import React from 'react';
import MenuAd from './admin_menu/MenuAd';
import Admin_staff from './admin_staff/Admin_staff';
 
class Admin_listStaff extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Admin_staff/>
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
	}
 
}
 
export default Admin_listStaff;