import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {Table, Button} from 'react-bootstrap';
import {API_URL} from '../Constants/URL';
import { Link, useNavigate } from 'react-router-dom';

function Read() {
const [apiData, setAPIData] = useState([]);
const navigate = useNavigate();

const updateUser = ({empName,position,empId,mobNo,id}) =>{
  localStorage.setItem('id', id)
  localStorage.setItem('empName', empName)
  localStorage.setItem('position', position)
  localStorage.setItem('empId', empId)
  localStorage.setItem('mobNo', mobNo)
  navigate('/update')  
}

const deleteUser = async(id) =>{
  await axios.delete(API_URL+id)
  callAPIData();
}

const callAPIData = async() =>{
  const res = await axios.get(API_URL);
  setAPIData(res.data);
}

useEffect(() => {
  callAPIData();
}, []);

  return (
  <div className='read'>  
      <div className='readHeader mt-5'>
        <Link><Button className="fw-bold" onClick={()=>{navigate(-1)}}>Go back</Button></Link>
        <Link to={"/create"}><Button className='text-bg-success fw-bold border-0'>+ Add new employee</Button></Link>
      </div>

  <Table bordered hover className='text-center' size="sm" variant='muted'>
    <thead className='table-dark'>
      <tr>
        <th>Employee Name</th>
        <th>Designation</th>
        <th>Emp ID</th>
        <th>Mobile No.</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody variant='info'>
    {apiData.map(data =>(
      <tr key = {data.id}>
        <td>{data.empName}</td>
        <td>{data.position}</td>
        <td>{data.empId}</td>
        <td>{data.mobNo}</td>
        <td><Button className="text-light p-1" variant='warning' onClick={()=> updateUser(data)}>Edit</Button></td>
        <td><Button className="text-light p-1" variant='danger' onClick={()=>{deleteUser(data.id)}}>Delete</Button></td>
      </tr>  
      ))}
    </tbody>
  </Table>

  </div>
  )

}

export default Read