import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import App from './App.jsx'
import AppRoutes from "./AppRoutes.jsx";

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <QueryClientProvider client={queryClient}>
  
       <BrowserRouter>
 
   
         <Routes>
    {/* Frontend site */}
    <Route path="/*" element={<App />} />

    {/* Admin panel */}
    <Route path="/admin/*" element={<AppRoutes />} />
  </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  </StrictMode>,
)
