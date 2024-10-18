import './App.css'
import Home from './Components/Home'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {

  return (

  <div className='app'>
    <BrowserRouter>
    <Navbar/>
    <Footer/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  </div>

  )

}

export default App