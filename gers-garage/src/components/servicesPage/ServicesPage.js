import React from 'react';
 
import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';
 
 
class ServicesPage extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading">Services </h1>
				      <p className="lead text-muted">
				      	Our services
				      </p>				      
				    </div>
				</section>
 
		        <div className="album py-5 bg-light">
				    <div className="container">
 
				      <div className="row">
				        <div className="col-md-12">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Annual Service"><title>Annual Service</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Annual Service</text></svg>
				            <div className="card-body">
				              <p className="card-text">Our Annual Service is ideal as a maintenance programme for your car. We recommend your car receives an Annual Service every 20,000 kilometres or 12 months – whichever is sooner.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <a className="btn btn-secondary" href="#booking" role="button">Book</a>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-12">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Major Service"><title>Major Service</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Major Service</text></svg>
				            <div className="card-body">
				              <p className="card-text">Our major service is one of the most important services that your car will receive, it is essentially a complete overall check of the vehicle. Everything included in a annual service is in a major service plus even more in-depth checks, spark plugs changed, brake fluid, suspension and fuel filters.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
								<a className="btn btn-secondary" href="#booking" role="button">Book</a>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-12">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Repair/Fault"><title>Repair/Fault</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Repair/Fault</text></svg>
				            <div className="card-body">
				              <p className="card-text">If you’re concerned about a fault with your car, our mechanics can carry out a number of different car repairs to help keep your car on the road and running smoothly. Our highly professional and trained mechanics use the best quality products combined with latest techniques for all car repair services.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <a className="btn btn-secondary" href="#booking" role="button">Book</a>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
 
				        <div className="col-md-12">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Major Repair"><title>Major Repair</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Major Repair</text></svg>
				            <div className="card-body">
				              <p className="card-text">We offer an extensive range of car repair services for cars of all makes and models. We provide the best, most affordable, and professional major repair for your vehicle.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
								  <a className="btn btn-secondary" href="#booking" role="button">Book</a>
				                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">Book</button> */}
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        
				        
				        
				      </div>
				    </div>
					
				</div>
				
	  		</main>
			
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default ServicesPage;