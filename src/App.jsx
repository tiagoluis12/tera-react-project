import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './components/pages/Home'
import Users from './components/pages/Users'
import UserBlog from './components/pages/UserBlog'
import PostForm from './components/pages/PostForm'

import { CurrentUserContext } from "./contexts/CurrentUserContext"

import "./styles/normalize.css"
import "./styles/fontawesome.min.css"
import "./styles/main.css"
import { useState } from "react"

function App() {
  const [currentUser, setCurrentUser] = useState("")


  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserBlog />} />
        <Route path="/users/:userId/post" element={<PostForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
    </CurrentUserContext.Provider>
  )
}

export default App;
