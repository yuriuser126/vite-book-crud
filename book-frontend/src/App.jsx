import { useState } from 'react'

// import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import JoinForm from './pages/user/JoinForm'
import Home from './pages/home'
import LoginForm from './pages/user/LoginForm'
import SaveForm from './pages/book/SaveForm'
import UpdateForm from './pages/book/UpdateForm'
import Detail from './pages/book/detail'


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
        <Route path='/SaveForm' element={<SaveForm />} />
        <Route path='/UpdateForm/:id' element={<UpdateForm />} />
        <Route path='/book/:id' element={<Detail />} />
      </Routes>
      </div>      
    </>
  )
}

export default App
