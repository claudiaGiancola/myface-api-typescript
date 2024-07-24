import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { PostsPage } from './components/posts.tsx'

function App() {

  return (
    <>
      <div>
        <h1>My Face</h1>
      </div>
      
      <PostsPage/>
      
    </>
  )
}

export default App;


