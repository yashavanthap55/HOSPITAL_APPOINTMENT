import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/NavBar.jsx'
import Doctors from './pages/doctorsList.jsx'
import Login from './pages/LoginForm.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './pages/profile.jsx'
import Appointments from './pages/Appointment.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import './styles/App.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/doctors' element={<Doctors/>}/>
     <Route path='/doctors/:speciality' element={<Doctors/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/my-profile' element={<Profile/>}/>
     <Route path='/Myappointments' element={<MyAppointments/>}/>
     <Route path='/appointments/:docID' element={<Appointments/>}/>
    </Routes>
    </>
  )
}

export default App