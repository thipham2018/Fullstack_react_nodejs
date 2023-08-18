import { Children, useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    Children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },


]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
