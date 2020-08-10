import React from "react"
const Draggable = props => {
    const drag = (e) => {
        e.dataTransfer.setData('hello', e.target.id);
    }

    const noAllow = (e) => {
        e.stopPropagation();
    }
    return (
        <div id={props.id} draggable='true' onDragStart={drag} onDragOver={noAllow} style={props.style} >
            {props.children}
        </div>
    )
}
export default Draggable