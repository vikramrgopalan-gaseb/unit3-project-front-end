import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import TopicForm from './components/TopicForm/TopicForm';


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/create-topic' element={<TopicForm />} />
      </Routes>
    </>
  )
}

export default App
