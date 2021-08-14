import React from 'react';
import { useParams } from 'react-router-dom';  
import Menu from '../menu/Menu';
//import Form_book from './form/Form_book'; 

import Footer from '../footer/Footer';
import Form_bookCopy from './form/Form_book copy';
 
 
function Booking(props) {
 
	
		const {email} = useParams();
	
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<div className="container">
 
					<h1 className="mb-5">Booking</h1>
 
            		<div className="row">
 
            			<div className="col-md-6">
		        
							{/* <Form_book />  */}
							<Form_bookCopy email={email} />
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
 
 
export default Booking;