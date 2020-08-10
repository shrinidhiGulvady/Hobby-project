import React from "react";
import Dragable from '../Dragable'
import Droppable from '../Droppable'
import Card from 'react-bootstrap/Card'

const droppableStyle = {
    backgroundColor: '#5778',
    width: '250px',
    height: '340px',
    margin: '32px'
};
const s = 1
const DND = () => {
    return (

        <Card style={{ width: '1rem' }} style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <Droppable id="h" style={droppableStyle} >
                <Dragable style={{ margin: '8px' }} id={s} >
                    <Card >hello</Card>
                </Dragable>

                <Dragable style={{ margin: '8px' }} id="item3" >
                    <Card>haaa  </Card>
                </Dragable>
            </Droppable>
            <Droppable id="mdddd" style={droppableStyle}>

            </Droppable>
        </Card >
    )
}
export default DND