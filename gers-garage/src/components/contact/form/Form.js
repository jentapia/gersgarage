import React from 'react';
import '../../../App.css';
 
class Form extends React.Component {
 
  render() {
 
    return (
 
        <form className="mb-5">
 
          <div className="form-group">
            <label htmlFor="name" className="negrita">Name</label>
            <input type="text" className="form-control" id="name" required />            
          </div>
 
          <div className="form-group">
            <label htmlFor="email" className="negrita">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="subject" className="negrita">Subject</label>
            <input type="text" className="form-control" id="subject" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="message" className="negrita">Message</label>
            <textarea className="form-control" id="message" required></textarea>
          </div>
 
          <button type="submit" className="btn btn-dark">Send</button>
 
        </form>
 
    )
    
  }
 
}
 
export default Form;