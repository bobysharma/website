import React, { useState } from 'react';
import {FaGithub} from 'react-icons/fa'
const Service =() =>{
    const [header]=useState({mainheader:"SERVICES",subheader:"My services",
    text:"i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field"})
    const [state]=useState([{id:1,
        icon:'FaGithub',
    heading:'Web Devlopment',
    text:'i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field'},
    {id:2,
        icon:'FaCamera',
        heading:'Photography',

    text:'i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field'},

    {id:3,
        icon:'FaCircleNotch',
        heading:'Web Design',
    text:'i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field'},
    {id:4,
        icon:'FaApple',
        heading:'App Devlopment',
    text:'i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field'},
    {id:5,
        icon:'FaFileVideo',
        heading:'Video Editing',
    text:'i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field'},
    {id:6,icon:'FaSearch',
    heading:'Seo Expert',
    text:'i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field'},





])
    return(
        <div className="services">
            <div className="container">
                <div className="service_header">
                   
                  
                    <div className="comman">
                    <h3 className="heading">
                        {header.mainheader}
                    </h3>
                    <h1 className="main_header">
                       {header.subheader}
                    </h1>
                    <p className="maincontent">
                    {header.text}
                    </p>
                    <div className="commanborder"></div>
                    </div>
                    <div className="row bgmain">
                        {state.map((info) =>(
                            <div className="col-4">
                            <div class="servicebox">
                                <FaGithub  className="commanicon "/>
                                <div className="service_box-header">
                                    {info.heading}
                                </div>
                                <div className="service_box-p">
                                {info.text}                                </div>
                            </div>
                        </div>


                        ))}
                        
                    </div>
                   
                </div>
            </div>
        </div>

    )
}
export default Service;
