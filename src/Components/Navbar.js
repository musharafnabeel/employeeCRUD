import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className='py-2'>
            <Link to={"/"} className='text-decoration-none'><div className='fs-4 text-light fw-bold'>Home</div></Link>
            <div>
                <Link to={"/read"}><div className='me-5 btn btn-outline-warning fw-bold border-2'>View</div></Link>
                <Link to={"/create"}><div className='ms-3 btn btn-outline-info fw-bold border-2'> Add</div></Link>
            </div>
        </nav>
    )
}

export default Navbar