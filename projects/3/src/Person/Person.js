import React from 'react'
import styles from "./Person.css"
// za styled komponente
/*
import styled from 'styled-components'
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
*/
const person = props => {
    const age = props.age === undefined ? "NE ZNAM BRE" : props.age

    return (
        //<StyledDiv>
        <div className={styles.Person}>
            <p onClick={props.click}>Ja sam {props.name} i imam {age} godina</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
        //</StyledDiv>
        
    );
}

export default person