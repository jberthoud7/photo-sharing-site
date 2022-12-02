import React from 'react'
import StartScreen from './pages/StartScreen'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateNewPost from './pages/CreateNewPost'
import DeleteAccount from './pages/DeleteAccount'
import Followers from './pages/Following'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='feed' element={<Feed />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='CreateNewPost' element={<CreateNewPost />} />
        <Route path='DeleteAccount' element={<DeleteAccount />} />
        <Route path='Following' element={<Followers />} />
      </Routes>
    </div>
  )
}

export default App