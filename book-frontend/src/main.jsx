import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' // ← 이건 개인 casecadingstyle
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  // ← 이게 부트스트랩 casecadingstyle 
import { BrowserRouter } from 'react-router-dom' //브라우저라우터 - 통신해주는거

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </StrictMode>,
)
