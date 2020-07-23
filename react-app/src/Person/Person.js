import React from 'react'

const person = props => {
    let age = props.age === undefined ? "NE ZNAM BRE" : props.age
    return (
        <div>
            <p>Ja sam {props.name} i imam {age} godina</p>
            <p>{props.children}</p>
        </div>
        
    );
}

export default person