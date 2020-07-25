import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
        let useFunction = null;
        if (props.changeUsername == undefined)
                useFunction = props.changePassword
        else
                useFunction = props.changeUsername
        
        return(
            <div className="UserInput">
                <input type="text" onChange={useFunction} value={props.name} />
            </div>
        )
}

export default UserInput;
