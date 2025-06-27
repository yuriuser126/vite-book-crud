import { useState } from 'react'

// import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import JoinForm from './pages/user/JoinForm'
import Home from './pages/home'
import LoginForm from './pages/user/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  // path 기본이 /임 element로 설정 더해줘야함
  return (    
    <> 
      <div>
      <Header />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/joinForm' element={<JoinForm />} />
        <Route path='/LoginForm' element={<LoginForm />} />
      </Routes>
      </div>      
    </>
  )
}

export default App
