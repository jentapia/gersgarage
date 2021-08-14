import React from 'react';
 
import Menu from '../menu/Menu';
import Form_reg from './form/Form_reg'; 

import Footer from '../footer/Footer';
 
 
class Register extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<div className="container">
 
					<h1 className="mb-5">Register</h1>
 
            		<div className="row">
 
            			<div className="col-md-6">
		        
							<Form_reg /> 
                            <br></br>
                            <br></br>
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
 
export default Register;