import React from 'react';
import Figure from 'react-bootstrap/Figure'
import ASserv from '../../../images/AS-service.png';
import MRserv from '../../../images/MR-service.png';
import RFserv from '../../../images/RF-service.png';
import MSserv from '../../../images/MS-service.png';
 
function Services() {
 
    
 
    return (
 
        <div className="container">
 
            <div className="row">
 
                <div className="col-lg-3 col-centered">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={ASserv}
                        />
                        <Figure.Caption>
                        <h2>Annual Service</h2>
                        <p>Our Annual Service is ideal as a maintenance programme for your car.</p>
                        <p><a className="btn btn-secondary" href="#login" role="button">Book &raquo;</a></p>
                        </Figure.Caption>
                    </Figure>
                    {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" src={engine} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Annual Service</h2>
                    <p>Our Annual Service is ideal as a maintenance programme for your car.</p>
                    <p><a className="btn btn-secondary" href="#booking" role="button">Book &raquo;</a></p> */}
                </div>
 
                <div className="col-lg-3">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={MSserv}
                        />
                        <Figure.Caption>
                        <h2>Major Service</h2>
                        <p>Our Major Service is a complete overall check of your vehicle.</p>
                        <p><a className="btn btn-secondary" href="#login" role="button">Book &raquo;</a></p>
                        </Figure.Caption>
                    </Figure>
                    {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Major Service</h2>
                    <p>Our Major Service is a complete overall check of your vehicle.</p>
                    <p><a className="btn btn-secondary" href="#booking" role="button">Book &raquo;</a></p> */}
                </div>
 
                <div className="col-lg-3">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={RFserv}
                        />
                        <Figure.Caption>
                        <h2>Repair/Fault</h2>
                        <p>Repairs for all Makes.</p>
                        <p><a className="btn btn-secondary" href="#login" role="button">Book &raquo;</a></p>
                        </Figure.Caption>
                    </Figure>
                    {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Repair/Fault</h2>
                    <p>Repairs for all Makes.</p>
                    <p><a className="btn btn-secondary" href="#booking" role="button">Book &raquo;</a></p> */}
                </div>

                <div className="col-lg-3">
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={MRserv}
                        />
                        <Figure.Caption>
                        <h2>Major Repair</h2>
                        <p>The best and professional major repair service for your vehicle.</p>
                        <p><a className="btn btn-secondary" href="#login" role="button">Book &raquo;</a></p>
                        </Figure.Caption>
                    </Figure>
                    {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Major Repair</h2>
                    <p>The best and professional major repair service for your vehicle.</p>
                    <p><a className="btn btn-secondary" href="#booking" role="button">Book &raquo;</a></p> */}
                </div>
 
            </div>
 
        </div>
 
    )
 
}
 
export default Services;