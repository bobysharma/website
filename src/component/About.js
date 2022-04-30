import React, { useState } from "react";
const About = () => {
    const [header] = useState({
        subheader: "About", text: "i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field"});
    const [state]=useState([
        {id:1, title:'Name:', text:'Jonathan Doe'},
        {id:2, title:'Email:',  text:'abc@domain.com'},
        {id:3, title:'Phone:', text:'+91-8077832696'},
        {id:4, title:'Linkdn:', text:'Jonathan Doe_123'},
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="comman">

                    <h1 className="mainheader">
                        {header.subheader}
                    </h1>
                    <p className="maincontent">
                        {header.text}
                    </p>
                    <div className="commanborder"></div>
                </div>
                <div className="row h-650 aligncenter">
                    <div className="col-6 ">
                        <div className="about_img">
                            <img src="/image/man-01.png" alt="about" />
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="about_infoo">
                            <h1>Hi There</h1>
                            <div className="about_infoo-p1">
                            i,m Jonathan Professional  web developer with
                            long time experience in ths fieldi,m Jonathan 
                            Professional  web developer long time experience
                            i,m Jonathan Professional  web developer with
                            long time experience in ths fieldi,m Jonathan 
                            Professional  web developer long time experience  

                            </div>
                            <div className="about_infoo-p2">
                            i,m Jonathan Professional  web developer with
                            long time experience in ths fieldi,m Jonathan Professional  web developer with
                            long time experience in ths fieldi,m Jonathan 
                            Professional  web developer long time experience
                            </div>
                            <div className="info_contact">
                            <div className="row">
                           {state.map(info =>(
                                <div className="col-6" >
                                <strong>{info.title}</strong>
                                <p>{info.text}</p>

                            </div>
                        

                           ))}
                           
                             
                              

                        
                            
                                 

                               
                               
                                
                                
                                </div>
                            </div>
                        </div>

                </div>
                </div>
                
            </div>

        </div>
    )
}

export default About;