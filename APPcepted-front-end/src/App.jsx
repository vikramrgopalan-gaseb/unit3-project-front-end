import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import SignUpForm from './components/SignUpForm/SignUpForm'
import TopicForm from './components/TopicForm/TopicForm'
import createClass from './components/CreateClassForm/CreateClassForm'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/create-topic' element={<TopicForm />} />
        <Route path='/create-class' element={<createClass />} />
      </Routes>
    </>
  )
}

export default App
