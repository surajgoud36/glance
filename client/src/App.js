import './App.css';
import icon from './icon.PNG';
import pp from './pp.jpg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [fnum, setfnum] = useState('');
  const [snum, setsnum] = useState('');
  const [message, setmessage] = useState('');
  const total = parseInt(fnum) + parseInt(snum);
  const [serverside, serversideSet] = useState(0)
  const handleSubmit = (event) => {
    event.preventDefault();
    setmessage(`${total}`);
    setfnum('');
    setsnum('');
    console.log(fnum,snum)
    axios.get(`http://100.25.77.216:3000/adding/${parseInt(fnum)}/and/${parseInt(snum)}`).then((res) => { 
     console.log("client",Number(res.data.result)) 
    serversideSet(res.data.result) }).catch((e) => {
      console.log("error")
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={icon}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Media Library
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid style={{ paddingTop: 100 }}>
          <Row>
            <Col xs={6} md={4}>
              <img
                alt=""
                src={pp}
                width="300"
                height="300"
                className="d-inline-block align-top"
              /></Col>

            <Col xs={12} md={8}>


              <h1 contenteditable="true">
                Venkata Gowtham
              </h1>
              <p contenteditable="true">
                I am venkata Gowtham Matcha. Student id 001568608
                i am currently pursuing Masters in computer science at university of albany. I have completed my undergraduation in Bachelor of Technology in one of the reputed organizations in India, KL University major in computer science.
                I have done my undergraduate project on spot examination. This web application allows the university to host online examination for their student and allows them to evaluate results and performance of the students.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="firstNumber">
                  <Form.Label> First Number: </Form.Label>
                  <input type="number" placeholder="Enter First Number" id="fnum" name="fnum" value={fnum} onChange={(event) => setfnum(event.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="secondNumber">
                  <Form.Label> Second Number: </Form.Label>
                  <input type="number" placeholder="Enter Second Number" id="snum" name="snum" value={snum} onChange={(event) => { setsnum(event.target.value); }} />

                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Form.Group>
                  <Form.Text>
                    <h1>Your Answer from the frontend is {message}</h1>
                    <h1>The Addition from the server side:{serverside}</h1>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;