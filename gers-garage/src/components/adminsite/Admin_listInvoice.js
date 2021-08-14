import React from 'react';
 
import MenuAd from './admin_menu/MenuAd';
import Admin_invoice from './admin_invoice/Admin_invoice';
 
class Admin_listInvoice extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<MenuAd /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Admin_invoice />
                      <br></br>
		  	        
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		</>
 
		)
 
	}
 
}
 
export default Admin_listInvoice;