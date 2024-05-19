import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './layout/auth/Login'
import Register from './layout/auth/Register'
import Course from './layout/course/Course'
import Dashboard from './layout/Dashboard'
import ErrorPage from './layout/ErrorPage'
import Profile from './layout/profile/Profile'
import Program from './layout/schedule/Program'
import Calendar from './layout/schedule/Schedule'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-course" element={<Course />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/program" element={<Program />} />
        <Route path="/schedule" element={<Calendar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
