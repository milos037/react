import React from 'react'

const ValidationComponent = (props) => {
    let textLength = props.textLength;
    let showText = ''
    if (textLength === 0)
        showText = "Unesite tekst"
    else if (textLength < 3)
        showText = "Text je previše kratak"
    else if (textLength > 10)
       showText = "Text je previše dugačak"
    else
        showText = "Dobar"


    return(
        <div>
            {showText}
        </div>
    )
}

export default ValidationComponent