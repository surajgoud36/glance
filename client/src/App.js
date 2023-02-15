import logo from './logo.svg';
import './App.css';
import p from './images/s.png';
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Axios from "axios";
function App() {
  const [name,setName]=useState("Suraj");
  const [bio,setBio]=useState("I am Student at Ualbany and I dont like the cold weather here");
  const[first,setFirst]=useState(null);
  const[sec,setSec]=useState(null);
  const[r1,setR1]=useState();
  const[r2,setR2]=useState();
  const Add=()=>{
    setR1(Number(first)+Number(sec));
    Axios.get(`http://54.236.28.39:3000/add/${first}/and/${sec}`).then((response)=>{
      setR2(Number(response.data.Addition));
      console.log(response.data.Addition);
    });
  }
  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={p}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Assignment1
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    
    
  
    <Container fluid="md" className='mt-3'>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={p} />
        <Card.Body>
          <Card.Title >{name}</Card.Title>
          <Card.Text >
            {bio}
          </Card.Text>
         
        </Card.Body>
      </Card>
        </Col>
        <Col>
         <h2>Addition of two Numbers </h2>
         <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">First Number</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          //value={first}
          onChange={(event)=>{setFirst(event.target.value)}}
        />
         </InputGroup>
         <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Second Number</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          //value={sec}
          onChange={(event)=>{setSec(event.target.value)}}
        />
         </InputGroup>
         <Button variant="primary" className='text-center' onClick={Add}>Submit</Button>{' '}
         <h4>Result from React Js:{Number(first)+Number(sec)}</h4>
         <h4>Result from Server:{r2}</h4>
        </Col>
      </Row>
    
      </Container>
      <Container fluid="md" className='mt-3'>

      
    <InputGroup className="mb-3 mt-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(event)=>{setName(event.target.value)}}
        />
      </InputGroup>
    <InputGroup>
        <InputGroup.Text>Bio</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" value={bio} onChange={(event)=>{setBio(event.target.value)}} />
      </InputGroup>
      </Container>
      </>
      
    
  );
}

export default App;
