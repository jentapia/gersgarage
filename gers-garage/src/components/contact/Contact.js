import React from 'react';
 
import Menu from '../menu/Menu';
import Form from './form/Form'; 

import Footer from '../footer/Footer';
 
 
class Contact extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<div className="container">
 
					<h1 className="mb-5">Contact</h1>
 
            		<div className="row">
 
            			<div className="col-md-6">
		        
							<Form /> 
                             
						</div>
 
						
 
					</div>
					<hr className="featurette-divider" />
				</div>	
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Contact;