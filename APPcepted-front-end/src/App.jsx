import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import TopicForm from './components/TopicForm/TopicForm';
import createClass from './components/CreateClassForm/CreateClassForm'
import MyClasses from './components/MyClasses/MyClasses'
import EditMyClass from './components/EditMyClass/EditMyClass'

import { fetchClasses, fetchTopics } from './services/listServices'

const [classes, setClasses] = useState([])
const [selectedClass, setSelectedClass] = useState({})

const fetchClassList = async () => {
  const fetchedClasses = await fetchClasses()
  setClasses(fetchedClasses)
}

fetchClassList()

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/create-topic' element={<TopicForm />} />
        <Route path='/classes/create-class' element={<createClass />} />
        <Route path='/classes/my-classes' element={<MyClasses classes={classes} setSelectedClass={setSelectedClass}/>} />
        <Route path='/classes/my-classes/:classId' element={<EditMyClass selectedClass={selectedClass} />} />
      </Routes>
    </>
  )
}

export default App
