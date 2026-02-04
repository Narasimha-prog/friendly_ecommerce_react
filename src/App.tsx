
import { Navigate, Route, Routes } from 'react-router-dom'

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import HomePage from "./pages/HomePage";
import { useEffect, type ReactNode } from "react";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/NavBar";
import { useSelector } from 'react-redux';
import type { RootState } from './store/storeConfig';



const App = () => {
  useEffect(() => {
}, []);

const ProtectedRoute = ({ children }:{children:ReactNode}) => {
  const isAuthenticated = useSelector(
    (state:RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const  theme=useSelector((state:RootState)=>state.theme.mode);

        


  return (

     <div className={theme === "dark" ? "dark" : ""}>

      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        
        <Navbar/>
        
       
        <Routes>
          <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>

      </div>
    </div>
  )
}

export default App