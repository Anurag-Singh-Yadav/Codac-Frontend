import React, { useState } from 'react'
import './App.css'
import Login from './components/Login'
import FileUpload from './components/Services/FileUpload'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/UI-related-components/Navbar'
import Signup from './components/Signup'
import Preview from './components/UI-related-components/Preview'

function App() {
  const [preview , setPreview] = useState(null);
  return (
    <div className=''>
      <Navbar />
      <div className='pt-[12vh]'>
      <Routes>
        <Route path="/" element={<FileUpload preview={preview} setPreview={setPreview} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/preview" element={<Preview preview={preview} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
