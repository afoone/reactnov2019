import React from 'react';

const Image = (props) => {

    return (
        <div className="image">
            <img className="ui medium rounded image" src={props.image} alt=""></img>
        </div>
    )
} 


export default Image;

