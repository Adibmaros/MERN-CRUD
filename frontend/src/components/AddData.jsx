import {Container , Row, Col , Button , Form} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddData = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/new', {
                username,
                email,
                age
            });
            navigate('/');
        } catch (error) {
            console.log('Error adding data:', error);
        }
    };
  return (
    <Container>
        <Row>
            <Col sm={6} className='mx-auto'>
                <h1>Add Data</h1>
                <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) =>  setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
         type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>  setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control
         type="number"
          placeholder="Age"
          value={age}
          onChange={(e) =>  setAge(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Tambah Data
      </Button>
    </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default AddData
