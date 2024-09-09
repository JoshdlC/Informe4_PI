import { BrowserRouter, Routes, Route } from "react-router-dom" ; 
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import MainUsersPage from "./pages/MainUsersPage";
import ProfilePage from "./pages/ProfilePage";
import NewPubPage from "./pages/NewPubPage";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import TasksPage from "./pages/TasksPage";
import NavBar from "./components/NavBar";


function App(){
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>  
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route element= {<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/foro" element={<MainUsersPage />} />
              <Route path="/nuevaPub" element={<NewPubPage />} />
              <Route path="/tasks" element={<TasksPage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App 