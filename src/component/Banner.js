import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaPlay, FaTwitter } from "react-icons/fa"
const Banner = () => {
    const [state ,setState]=useState({title:'I am Jonathan Doe',
    text:'i,m Jonathan Professional  web developer with\
    long time experience in ths field',image:'/image/man-01.png' });
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header_section">
                                <ul className="header_ul">
                                    <li><FaFacebook /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaPinterest /></li>
                                    <li><FaInstagram /></li>

                                </ul>
                                <h1> {state.title}</h1>
                                <p>
                                   {state.text}
                                </p>
                                <div className="header_button">
                                    <a href="" className="btnn btnn-out">
                                        My Portfolio
                                        </a>
                                        &nbsp; &nbsp; &nbsp;
                                        <a href="" className="btnn btnn-smart">
                                            <FaPlay className="play" />
                                            </a>

                                    </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner_img">
                            <img src={state.image} alt="banner" />
                            </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Banner;
