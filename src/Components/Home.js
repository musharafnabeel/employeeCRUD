import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


function Home() {
    return(
        <div className="home">   

        <h1 className="my-3 fw-bold text-success text-center">Employee Management - CRUD Operations</h1>
        <h2 className="my-3 fw-bold text-uppercase text-center">Globex Tech Corporation</h2>

        <Link to={"/read"}><Button className='text-bg-primary fw-bold my-5'>View Employee list</Button></Link>
        <Link to={"/create"}><Button className='text-bg-success fw-bold border-0'>+ Add new employee</Button></Link>

        </div>
    )
}

export default Home