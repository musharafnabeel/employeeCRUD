import axios from 'axios';
import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {API_URL} from '../Constants/URL';
import { useNavigate } from 'react-router-dom';

function Create() {
const [empName, setEmpname] = useState('');
const [position, setPosition] = useState('');
const [empId, setEmpid] = useState('');
const [mobNo, setMobno] = useState('');

const navigate = useNavigate();

const postData = async () => {
  await axios.post(API_URL,{
    empName,
    position,
    empId,
    mobNo
  })
  navigate('/read');
}
  return (
    <Form className="form py-2 bg-muted">
      <Form.Group className='py-3'>
        <Form.Label>Name of the Employee</Form.Label>
        <Form.Control type="text" value={empName} placeholder="Enter Name"
        onChange={e => setEmpname(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className='py-3'>
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" value={position} placeholder="Enter Designation"
        onChange={e => setPosition(e.target.value)}/>
      </Form.Group>

      <Form.Group className='py-3'>
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="number" value={empId} placeholder="Enter Employee ID"
        onChange={e => setEmpid(e.target.value)}/>
      </Form.Group>

      <Form.Group className='py-3'>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" value={mobNo} placeholder="Enter Mobile number"
        onChange={e => setMobno(e.target.value)} />
      </Form.Group>
      <div className="btn btn-outline-primary border-2 fw-bold mx-auto d-block" onClick={postData}>Submit</div>
    </Form>
  )
}

export default Create