import {Container, Row, Col, Table} from 'react-bootstrap'
import axios from 'axios';
import { useState , useEffect } from 'react';
import {Link} from 'react-router-dom'

const Homepage = () => {
    const [data , setData ] = useState([])

    

        const getUsers = async () => {
            try {
              const response = await axios.get("http://localhost:5000/data");
              setData(response.data);
            } catch (error) {
              console.error("Error fetching users:", error);
            }
          };


          useEffect(() => {
            getUsers()
        }, [])


        const deleteUser = async (id) => {
            try {
              await axios.delete(`http://localhost:5000/delete/${id}`)
              getUsers()
              
            } catch (error) {
              console.log(error);
            }
          }
  return (
    <Container fluid>
        <Row>
            <Col sm={8} className=' mx-auto'>
                <h1>Data</h1>
                <Link to='/add' className='btn btn-success'>Tambah data</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
    {data && data.map((d, index) => (
        <tr key={index}>
            <td>{d.username}</td>
            <td>{d.email}</td>
            <td>{d.age}</td>
            <td>
                <Link to={`/edit/${d._id}`} className='btn btn-primary'>Edit</Link>
                <Link onClick={() => deleteUser(d._id)} className='btn btn-danger'>Delete</Link>
            </td>
        </tr>
    ))}
</tbody>
            </Table>
            </Col>
        </Row>
    </Container>
  )
}

export default Homepage
