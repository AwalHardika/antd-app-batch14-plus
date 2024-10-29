import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './screen/auth/Login'
import HomeScreen from './screen/home_screen/HomeScreen'

const App = () => {
  // Protected Route
  const [isLogin, setIsLogin] = useState(true)

  if(!isLogin){
    return (
      <Routes>
        <Route path='/' element={<Login/>} />
      </Routes>
    )
  }

  return(
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
    </Routes>
  )


  
  
}

export default App