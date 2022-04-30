import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaPlay, FaTwitter } from "react-icons/fa"
const Contact =() =>{
    const [header]=useState({subheader:""

    })
    return(
        <div className="contact">
            <div className="container">
                <div className="contact_section">
                   
                        <div className="row justifycenter">
                            <div className="col-6">
                            <div className="contact_section-logo">
                        <img src="/image/logo.png" alt="" />
                        </div>
                        <p>
                            i,m Jonathan Professional  web developer with
                            long time experience in ths fieldi,m Jonathan Professional  web developer with
                            long time experience in ths fieldi,m Jonathan 
                            Professional  web developer long time experience
                            </p>
                            <ul className="contactcircle">
                                
                                    <li><FaFacebook /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaPinterest /></li>
                                    <li><FaInstagram /></li>
                                </ul>
                            
                            </div>
                            </div>
                        
                    
                </div>
           
            </div>
        </div>

    )
}
export default Contact;