import React, { useState } from "react";
const Prices =()=>{
    const [header]=useState({mainheader:'Choose a Plan',subheader:"Prices Plan",text:"i,m Jonathan Professional  web developer with\
    long time experience in this fieldweb developer with\
    long time experience in this field"});
    const [state] =useState([
        {id:1,heading:"Basic",price:"50",
        msg1:"5Gb Storage Space",
        msg2:"20Gb Monthly BandWidth",
        msg3:"MY SQL DataBase",
        msg4:"100 Email Account",
        msg5:"10 Free Domain Name"

    
    },
    {id:2,
        heading:"Standard",
        price:"80",
        msg1:"5Gb Storage Space",
        msg2:"20Gb Monthly BandWidth",
        msg3:"MY SQL DataBase",
        msg4:"100 Email Account",
        msg5:"10 Free Domain Name"

    
    },
    {id:3,
        heading:"Primium",
        price:"160",
        msg1:"5Gb Storage Space",
        msg2:"20Gb Monthly BandWidth",
        msg3:"MY SQL DataBase",
        msg4:"100 Email Account",
        msg5:"10 Free Domain Name"

    
    }
    ])
    return(
        <div className="prices">
            <div className="container">
            <div className="comman">
                    <h3 className="heading">
                        {header.mainheader}
                    </h3>
                    <h1 className="mainheader">
                       {header.subheader}
                    </h1>
                    <p className="maincontent">
                    {header.text}
                    </p>
                    <div className="commanborder"></div>
                    </div>
                <div className="row">
                    {state.map(info =>(
                    <div className="col-4" key={info.id}>
                        <div className="price">
                            <div className="priceheading">
                                {info.heading}
                                <div className="price_rs">
                                    <span>$</span>{info.price}
                                </div>
                                <ul>
                                    <li>{info.msg1} </li>
                                    <li>{info.msg2}</li>
                                    <li>{info.msg3}</li>
                                    <li>{info.msg4}</li>
                                    <li>{info.msg5}</li>
                                </ul>
                                <div className="price_btn">
                                <a href="" className="btnn btnn-out">
                                    Purchase
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                        


                    ))}
                    
                </div>
            </div>
        </div>

    )
}
export default Prices;