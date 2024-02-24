import './App.css'
import Login from './components/Login'
import FileUpload from './components/Services/FileUpload'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/UI-related-components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div className='pt-[15vh]'>
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
