import React from 'react';
 
import Menu from '../menu/Menu';
import Form_log from './form/Form_log'; 

import Footer from '../footer/Footer';
 
 
class Login extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<div className="container">
 
					<h1 className="mb-5">Login</h1>
 
            		<div className="row">
 
            			<div className="col-md-6">
		        
							<Form_log /> 
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
 
export default Login;