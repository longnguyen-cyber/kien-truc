import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Register from './layout/auth/Register'
import Login from './layout/auth/Login'
import ErrorPage from './layout/ErrorPage'
import Course from './layout/course/Course'
import Profile from './layout/profile/Profile'
import Program from './layout/schedule/Program'
import Dashboard from './layout/Dashboard'
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
