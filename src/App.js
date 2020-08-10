import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import axios from 'axios';
import store from './store';
import DND from './DND/DndTest'

import Dragable from './DND/Dragable'
import Droppable from './DND/Droppable'
import Container from 'react-bootstrap/Container'
function App() {
  const [image, setImage] = useState([]);
  const [key, setKey] = useState('statusCard');
  const [storage, setStorage] = useState([]);
  const [value, setValue] = useState();
  console.log(store.getState(), "state")


  const Refresh = () => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=10')
      .then(response => {
        setImage(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
  const imageList = () => image.map(i => <Card border="primary" style={{ margin: '10px' }}> <Card.Body><img src={i.download_url} width={300} height={300} /> </Card.Body></Card>)


  const change = (v) => {
    console.log(v.target.value)
    setValue(v.target.value)
  }

  const getStorage = () => {
    setStorage(store.getState())
  }
  const ControlledTabs = () => {
    return (
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} >
        <Tab eventKey="statusCard" title="Status Cards">
          <Container>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px' }} >
              <div  >
                <Droppable id="backlogs"  >
                  <Card style={{ width: '18rem' }}>
                    <Card.Header>
                      <div style={{ marginLeft: '5px' }}>BackLogs &nbsp; &nbsp; <Button variant="primary" onClick={() => {
                        store.dispatch({
                          type: 'Card_added',
                          payload: {
                            description: "hi second card"
                          }
                        })
                      }} >Add</Button></div>

                    </Card.Header>
                    <Card.Body>

                      {
                        storage.length && storage.map(s => {
                          return (
                            <Dragable style={{ margin: '8px' }} id={s.id} >
                              <Card>
                                <Card.Body>
                                  <div style={{ display: 'flex', flex: 1 }} >
                                    <Form.Control type="email" id={s.id} placeholder="Enter email" value={s.id} onChange={change} /> &nbsp;<Button variant="primary"
                                      onClick={() => {
                                        console.log(value, "dddd")
                                        store.dispatch({
                                          type: "updated",
                                          payload: {
                                            id: s.id,
                                            description: value
                                          }
                                        })
                                      }
                                      }
                                    >change</Button>&nbsp;
                                    <Button variant="primary"
                                      onClick={() => {
                                        store.dispatch({
                                          type: "Delete_Card",
                                          payload: {
                                            id: s.id,
                                          }
                                        })
                                      }}

                                    >Del</Button>
                                  </div>

                                </Card.Body>
                              </Card>

                            </Dragable>
                          )
                        })
                      }
                      {/* </Card.Text> */}

                    </Card.Body>
                  </Card>
                </Droppable>

              </div>
              <Droppable id="inProgress" >
                <Card style={{ width: '18rem' }} >
                  <Card.Header>Inprogress
                {/* <div style={{ marginLeft: '5px' }}>  <Button variant="primary" onClick={() => {
                      store.dispatch({
                        type: 'Card_added',
                        payload: {
                          description: "hi second card"
                        }
                      })
                    }} >Add</Button></div> */}

                  </Card.Header>
                  <Card.Body>

                  </Card.Body>
                </Card>
              </Droppable>
              <Droppable id="Completed" >
                <Card style={{ width: '18rem' }} >
                  <Card.Header>Completed
                {/* <div style={{ marginLeft: '5px' }}>  <Button variant="primary" onClick={() => {
                      store.dispatch({
                        type: 'Card_added',
                        payload: {
                          description: "hi second card"
                        }
                      })
                    }} >Add</Button></div> */}

                  </Card.Header>
                  <Card.Body>

                  </Card.Body>
                </Card>
              </Droppable>
            </div>

          </Container>
        </Tab>


        <Tab eventKey="gallery" title="Gallery Cards">
          <Container>
            <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', justifyContent: 'space-around' }} >
              {image.length && imageList()}
            </div>
          </Container>
        </Tab>
      </Tabs >
    );
  }

  store.subscribe(() => {
    console.log("store changed", getStorage())
  })

  useEffect(() => {
    getStorage()
    Refresh()
  }, [])
  useEffect(() => {
    getStorage()
    Refresh()
  }, storage)

  return (
    <div>
      <ControlledTabs />
      {/* <DND /> */}
    </div>
  );
}

export default App;
