import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AppRoutes from "./AppRoutes.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
       <BrowserRouter>
 
   
         <Routes>
    {/* Frontend site */}
    <Route path="/*" element={<App />} />

    {/* Admin panel */}
    <Route path="/admin/*" element={<AppRoutes />} />
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
