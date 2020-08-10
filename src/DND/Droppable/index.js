import React from 'react';
const Droppable = props => {
    const drop = (e) => {
        console.log(e, "e")
        e.preventDefault();
        const data = e.dataTransfer.getData('hello');
        e.target.appendChild(document.getElementById(data));
    }
    const allowDrop = (e) => {
        e.preventDefault();
    }

    return (
        <div id={props.id} onDrop={drop} onDragOver={allowDrop} style={props.style} >
            {props.children}
        </div>
    )
}
export default Droppable