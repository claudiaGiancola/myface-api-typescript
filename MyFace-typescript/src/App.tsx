import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';
import { HomePage } from './components/homepage.tsx';
import NavBar from './components/navBar.tsx';
import { PostsPage } from './components/posts.tsx'
import { UsersPage } from './components/users.tsx'
import { UserDetails } from './components/userDetails.tsx';


function App() {

  return (
    <>
      <NavBar />
      <div>
        <img src="https://i.ibb.co/DwWTLkY/logo.png" />
      </div>

      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>

    </>
  )
}

export default App;


