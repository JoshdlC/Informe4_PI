import { BrowserRouter, Routes, Route } from "react-router-dom"  
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext"
import HomePage from "./pages/HomePage"

function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/perfil" element={<h1>Profile</h1>} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App 