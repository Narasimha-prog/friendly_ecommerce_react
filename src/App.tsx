import {  useDispatch, useSelector } from "react-redux"
import type {  AppDispatch, RootState } from "./store/storeConfig"
import { Route, Routes } from 'react-router-dom'
import { toggle } from "./store/theme/themeReducer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import HomePage from "./pages/HomePage";



const App = () => {

const dispatch=useDispatch<AppDispatch>();
const  theme=useSelector((state:RootState)=>state.theme.mode);
console.log("Current theme mode:",theme);
const changeTheme=()=>{
  // Dispatch an action to change the theme
  dispatch(toggle());

}        

  return (

     <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        
        <button onClick={changeTheme} className="p-2 bg-blue-50  rounded-full m-4">
          {theme === "dark" ? 
            <SunIcon className="h-6 w-6 text-yellow-400" />
           : 
            <MoonIcon className="h-6 w-6 text-gray-800" />
          }
        </button>
       
        <Routes>
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