import React from 'react'
import styled from 'styled-components'
// import "./Person.css"
const StyledDiv = styled.div`
                            width: 60%;
                            margin: 20px auto;
                            border: 1px solid #eee;
                            box-shadow: 0 2px 3px #ccc;
                            padding: 16px;
                            text-align: center;
                            
                            @media (min-width: 500px)  {
                                width: '450px'
                            }
                        `;
const person = props => {
    const age = props.age === undefined ? "NE ZNAM BRE" : props.age
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>Ja sam {props.name} i imam {age} godina</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </StyledDiv>
        
    );
}

export default person