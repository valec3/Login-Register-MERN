import './App.css'
import { Route,BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {
    return (
        <BrowserRouter>
            <main className='w-screen h-screen bg-blue-400 flex justify-center'>
                <Routes>
                    <Route path="/" element={<Navigate to="/register"/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/dashboard" element={<h1 className='bg-black w-full text-white text-4xl font-bold text-center p-10'>Dashboard</h1>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
