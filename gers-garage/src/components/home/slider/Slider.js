import React from 'react';
import garage from '../../../images/garage.jpg';
import carmechanic from '../../../images/car-mechanic.png';
import cleaningcar from '../../../images/cleaning-car.jpg';
import Carousel from 'react-bootstrap/Carousel';
 
class Slider extends React.Component {
 
  render() {
 
  	return (

		<Carousel>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src={garage}
				alt="First slide"
				/>
				<Carousel.Caption>
				<h3>The Best Service</h3>
				<p>Cars, Motorbikes, Vans and Minibuses.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src={carmechanic}
				alt="Second slide"
				/>

				<Carousel.Caption>
				<h3>A Professional Team</h3>
				<p>The best mechanics team</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src={cleaningcar}
				alt="Third slide"
				/>

				<Carousel.Caption>
				<h3>The Best Place for your Vehicle</h3>
				<p>Your vehicle in the best hands.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
   		 
  	)
    
  }
 
}
 
export default Slider;