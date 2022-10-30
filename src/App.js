import React from "react";
import Weather from "./Weather";
import "./Weather.css";


export default function App() {
  return (
    <div className="App">   
      <div className="container">      
          <Weather />
          <footer>
            This progect was created by Margarita Kozlova and is open-sourced {" "}        
            <a href="https://github.com/MargaritaKremen/my-wheather-app-react" className="color-link"       
            target="_blank" rel="noopener noreferrer"> open-sourced on GitHub</a>

          </footer>
        </div>
    </div>
  );
}

