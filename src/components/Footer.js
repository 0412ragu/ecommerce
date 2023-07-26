import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return(<div >
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>About us</h3>
                        <p>We are company that specializes in  creating high-qualitytraining and placements </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Connect with us</h3>
                       
                        <ul className="social-media">
                            <li><a href="http://www.facebook.com"  ><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li><a href="http://www.instagram.com"  ><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li><a href="http://www.twitter.com"  ><FontAwesomeIcon icon={faTwitter}/></a></li>
                            <li><a href="http://www.linkedin.com" ><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>Contact us</h3>
                    <p>plot No.765,8th cross Road, Mr.cr exension,Govindarajar Nagar,Tamil Nadu-600 030
                        Near Anna Salai<br/>
                        phone: +91 8220495207<br/>
                        Email: info@skyspace.in</p>
                   
                </div>
            </div>
        </footer></div>

    )
}
export default Footer