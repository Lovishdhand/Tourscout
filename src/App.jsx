import { useState } from 'react'

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>

 <div style={{ height: '960vh', backgroundColor: '' }}>
        
      </div>


  <Footer/>
    </>
  )
}

export default App
