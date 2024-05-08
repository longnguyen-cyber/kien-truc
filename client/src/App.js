import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Register from './layout/auth/Register'
import Login from './layout/auth/Login'
import Dashboard from './layout/Dashboard'
import ErrorPage from './layout/ErrorPage'
import Course from './layout/course/Course'
import Profile from './layout/profile/Profile'
import Schedule from './layout/schedule/Schedule'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-course" element={<Course />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
