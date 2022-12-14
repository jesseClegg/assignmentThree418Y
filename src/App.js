import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import {Container} from "react-bootstrap";


function App() {
  return (
      <>
          <Container style={ {backgroundColor:"#e0e0d1", marginBottom: 30, marginTop: 30} }>
          <Row>
              <Col style={ {marginBottom: 15, marginTop: 15} }>
                  <img style={ {marginLeft: 15, marginRight: 5} }
                      width={20} height={20} src="https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon-32x32.png" />
                  Media Library
              </Col>

          </Row>
            </Container>


          <Container>
            <Row>
                <Col xs lg={4}
                    className='g-0' >
                    <img className='g-0'
                        width={300}
                        height={300}
                        src="https://s3forninad.s3.amazonaws.com/jeffreyDahmer.jpg"
                        alt="new"
                    />
                </Col>

                <Col xs lg={7}
                    style={{disply:'flex', justifyContent:'left'}}
                     className='g-0'
                     size='6'>
                    <Row>
                        <h2>
                            Jesse LastName
                        </h2>
                    </Row>
                   <Row style={ { marginTop: 15} }>
                       <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. E
                           xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                       </p>
                   </Row>
                </Col>
            </Row>
          </Container>
      </>
  );
}



export default App;
