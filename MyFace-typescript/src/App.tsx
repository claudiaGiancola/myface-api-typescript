import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';
import { PostsPage } from './components/posts.tsx'
import { UsersPage } from './components/users.tsx'
import { HomePage } from './components/homepage.tsx';
import NavBar from './components/navBar.tsx';


function App() {

  return (
    <>
      <NavBar />
      <div>
        <img src="https://i.ibb.co/DwWTLkY/logo.png" />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>


    </>
  )
}

export default App;


