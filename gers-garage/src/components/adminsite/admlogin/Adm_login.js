import React from 'react';
 
import Form_log from './form/Form_log'; 
import {Helmet} from 'react-helmet';

 
 
class Adm_login extends React.Component {


    


render () {

         
    return (
        <div className="application">
            <Helmet>
                <style>{'body { background-color: #ce6b00; }'}</style>
            </Helmet>
            <main role="main" className="flex-shrink-0 mt-5">
 
                <div className="container">

                    <h1 className="mb-5">Login Administrator</h1>

                    <div className="row">

                        <div className="col-md-6">
                
                            <Form_log /> 
                            <br></br>
                            <br></br>
                        </div>

                        

                    </div>
                    
                </div>	

            </main> 
        </div>
    );
  }

}

export default Adm_login;