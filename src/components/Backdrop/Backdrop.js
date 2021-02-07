import React from 'react'

function Backdrop(props) {
    return (
        <div className="backdrop" onClick={props.clicked}>&nbsp;</div>
    )
}

export default Backdrop
