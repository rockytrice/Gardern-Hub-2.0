import React from 'react';
import { Mask, Row, Col, Fa, Button, View, Container, Card, CardBody, Input, } from 'mdbreact';
import './SignUp.css'

const SignUpPage = ()=> (
      <div id="classicformpage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">Sign up right now! </h1>
                  <hr className="hr-light"/>
                  <h6 className="mb-4" >Garden Hub is an IOT application that directly controls a user’s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data.</h6>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <Card id="classic-card">
                    <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center"><Fa icon="user"/> Register:</h3>
                      <hr className="hr-light"/>
                      <Input label="Your name" icon="user"/>
                      <Input label="Your email" icon="envelope"/>
                      <Input label="Your password" icon="lock" type="password"/>
                      <div className="text-center mt-4 black-text">
                        <Button outline color="white">Sign Up</Button>
                        <hr className="hr-light"/>
                        <Col md="12">
                    <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="/Login" className="green-text ml-1 font-weight-bold"> Log in</a></p>
                  </Col>
                        <div className="text-center d-flex justify-content-center white-label">
                          <a className="p-2 m-2">
                            <Fa icon="twitter" className="white-text"/>
                          </a>
                          <a className="p-2 m-2">
                            <Fa icon="linkedin" className="white-text"/>
                          </a>
                          <a className="p-2 m-2">
                            <Fa icon="instagram" className="white-text"/>
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
      </div>
    );




export default SignUpPage;




