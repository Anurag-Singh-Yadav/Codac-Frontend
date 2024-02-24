import React from 'react'
import './App.css'
import Login from './components/Login'
import FileUpload from './components/Services/FileUpload'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/UI-related-components/Navbar'
import Signup from './components/Signup'

function App() {
  return (
    <div>
      <Navbar />
      <div className='pt-[12vh]'>
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
