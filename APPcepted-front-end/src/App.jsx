import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm'
import TopicForm from './components/TopicForm/TopicForm';
import createClass from './components/CreateClassForm/CreateClassForm'
import MyClasses from './components/MyClasses/MyClasses'
import MyTopics from './components/MyTopics/MyTopics'
import EditMyClass from './components/EditMyClass/EditMyClass'

import { fetchClasses, fetchTopics } from './services/listServices'

const [classes, setClasses] = useState([])
const [selectedClass, setSelectedClass] = useState({})

const [topics, setTopics] = useState([])
const [selectedTopic, setSelectedTopic] = useState({})

const fetchClassList = async () => {
  const fetchedClasses = await fetchClasses()
  setClasses(fetchedClasses)
}

fetchClassList()

const fetchTopicList = async () => {
  const fetchedTopics = await fetchTopics()
  setTopics(fetchedTopics)
}

fetchTopicList()

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/create-topic' element={<TopicForm />} />
        <Route path='/classes/create-class' element={<createClass />} />
        <Route path='/classes/my-classes' element={<MyClasses classes={classes} setSelectedClass={setSelectedClass}/>} />
        <Route path='/topics/my-topics' element={<MyTopics topics={topics} setSelectedTopic={setSelectedTopic}/>} />
        <Route path='/classes/my-classes/:classId' element={<EditMyClass selectedClass={selectedClass} />} />
      </Routes>
    </>
  )
}

export default App
