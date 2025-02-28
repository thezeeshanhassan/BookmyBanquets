import { useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'


const Router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])


function App() {
  return (
    <>
      <RouterProvider router={Router}>
      </RouterProvider>
    </>
  )
}

export default App
