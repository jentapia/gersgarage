import React from 'react';
 
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Details from './details/Details'; // Este Componente lo crearé a continuación 
import Footer from '../footer/Footer';
 
 
class AboutUs extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron />  
				<Details />  
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default AboutUs;