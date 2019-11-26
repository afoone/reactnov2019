import React from 'react';
import './App.css';
import Caja from './Caja'

const getTime = () => {
    return (new Date()).toLocaleDateString();
}


const App = () => {

    const mistextos = ["Mi texto1", "Mi texto 2", "Mi Texto 3"];

    return (
        <center>
            <h2 className="title" style={ {fontStyle: "italic"} } >   
                {getTime()}
            </h2>
            {
                mistextos.map( (e, index)=>{
                    return <Caja texto={index+" "+ e}></Caja>
                } 
                )
            }

            
        </center>
    );
}

export default App;