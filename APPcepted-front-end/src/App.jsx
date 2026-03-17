import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import EditUserClass from './components/EditUserClass/EditUserClass'
import EditUserTopic from './components/EditUserTopic/EditUserTopic'
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm'
import CreateTopic from './components/CreateTopicForm/CreateTopicForm'
import CreateNewClass from './components/CreateClassForm/CreateClassForm'
import MyClasses from './components/MyClasses/MyClasses'
import MyTopics from './components/MyTopics/MyTopics'
import EditMyClass from './components/EditMyClass/EditMyClass'
import EditMyTopic from './components/EditMyTopic/EditMyTopic'

import { fetchClasses, fetchTopics } from './services/listServices'
import { useEffect } from 'react'

function App() {
  const [classes, setClasses] = useState([])
  const [selectedClass, setSelectedClass] = useState({})

  const [topics, setTopics] = useState([])
  const [selectedTopic, setSelectedTopic] = useState({})

  const fetchClassList = async () => {
    const fetchedClasses = await fetchClasses()
    setClasses(fetchedClasses)
  }

  const fetchTopicList = async () => {
    const fetchedTopics = await fetchTopics()
    setTopics(fetchedTopics)
  }

  useEffect(() => {
      fetchClassList()
      fetchTopicList()
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage setSelectedClass={setSelectedClass} setSelectedTopic={setSelectedTopic} />} />
        <Route path='/classes/homepage/:classId' element={<EditUserClass selectedClass={selectedClass} setSelectedClass={setSelectedClass} classes={classes} fetchClassList={fetchClassList}/>} />
        <Route path='/topics/homepage/:topicId' element={<EditUserTopic selectedTopic={selectedTopic} fetchTopicList={fetchTopicList}/>} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/topics/create-topic' element={<CreateTopic fetchTopicList={fetchTopicList}/>} />
        <Route path='/classes/create-class' element={<CreateNewClass fetchClassList={fetchClassList}/>} />
        <Route path='/classes/my-classes' element={<MyClasses classes={classes} setSelectedClass={setSelectedClass} />} />
        <Route path='/topics/my-topics' element={<MyTopics topics={topics} setSelectedTopic={setSelectedTopic} />} />
        <Route path='/classes/my-classes/:classId' element={<EditMyClass selectedClass={selectedClass} fetchClassList={fetchClassList} />} />
        <Route path='/topics/my-topics/:topicId' element={<EditMyTopic selectedTopic={selectedTopic} fetchTopicList={fetchTopicList}/>} />
      </Routes>
    </>
  )
}

export default App
