import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
        return(
            <div className="UserOutput">
                <p>Username  <span>{props.username}</span></p>
                <p>Password  <span>{props.password}</span></p>
            </div>
        )
}

export default UserOutput;
