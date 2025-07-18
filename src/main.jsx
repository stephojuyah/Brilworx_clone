import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.jsx'
import TheWay from './pages/theWay/TheWay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/theway' element={<TheWay />} />
      </Routes>   
    </BrowserRouter>
  </StrictMode>,
)
