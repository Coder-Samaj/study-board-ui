import { Button, Typography } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Routes>
  )
}

export default App
