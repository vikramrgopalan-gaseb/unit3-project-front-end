import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm'
import TopicForm from './components/TopicForm/TopicForm';
import createClass from './components/CreateClassForm/CreateClassForm'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/create-topic' element={<TopicForm />} />
        <Route path='/create-class' element={<createClass />} />
      </Routes>
    </>
  )
}

export default App
