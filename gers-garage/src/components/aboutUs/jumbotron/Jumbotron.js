import React from 'react';
 
class Jumbotron extends React.Component {
 
  render() {
 
    return (
 
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">About us </h1>
                <p>
                    Donec id elit non mi porta gravida at eget metus.
                    <br/>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <p><a className="btn btn-dark btn-lg" href="#booking" role="button">Make a booking</a></p>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Jumbotron;