import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {Form} from 'react-bootstrap';
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';


function Update() {
  const [empName, setEmpname] = useState('');
  const [position, setPosition] = useState('');
  const [empId, setEmpid] = useState('');
  const [mobNo, setMobno] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();


  const updateUSer = async () => {
    await axios.put(API_URL+id,{
      empName,
      position,
      empId,
      mobNo
    })
    navigate('/read');
  }

  useEffect(()=>{
    setEmpname(localStorage.getItem('empName'))
    setPosition(localStorage.getItem('position'))
    setEmpid(localStorage.getItem('empId'))
    setMobno(localStorage.getItem('mobNo'))
    setId(localStorage.getItem('id'))
  },[])

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
    <div className="btn btn-outline-primary border-2 fw-bold mx-auto d-block" onClick={updateUSer}>Update</div>
  </Form>
  )
}

export default Update