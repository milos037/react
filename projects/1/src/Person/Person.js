import React from 'react'
import "./Person.css"

const person = props => {
    let age = props.age === undefined ? "NE ZNAM BRE" : props.age
    return (
        <div className="Person">
            <p onClick={props.click}>Ja sam {props.name} i imam {age} godina</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
        
    );
}

export default person