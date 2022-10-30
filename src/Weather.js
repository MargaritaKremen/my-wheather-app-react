import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">  
            <form >
                <div className="row">

                    <div className="col-9">                    
                        <input
                            type="search"
                            placeholder="Enter a city.."            
                            className="form-control"
                        />
                    </div>

                    <div className="col-3">
                        <input type="Submit" value="search" className="btn btn-primary"/>
                    </div>
                </div>   
            </form>              
         

            <h1> New York</h1>
            <ul>
                <li> Wednesday 07:00</li>
                <li> Mostly Cloudly</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/041/397/original/02d.png?1658582749" className = "icon"  width = "84" 
                    alt="Mostly Cloudly"/>
                    6°C
                </div>  
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15% </li>
                        <li>Humiditly: 75%</li>
                        <li>Wind: 5 km/h </li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}