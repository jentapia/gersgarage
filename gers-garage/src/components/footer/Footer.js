import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            {/* <p className="float-right"><a href="#">Home</a></p> */}
            <p>&copy; {(new Date().getFullYear())} Ger's Garage &middot; JenTapia Final Project</p>
            <p><a href="#admin">Admin Access</a></p>
        </footer>
 

    )
    
  }
 
}
 
export default Footer;