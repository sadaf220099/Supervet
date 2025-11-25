import React from 'react'
import './App.css'
import "./font.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeMain from './pages/home/homeMain'

import DashboardOutlet from './layout/Outlet'
import Story from './components/story/story'

const router = createBrowserRouter([
  {

    path: "/",
    element: <DashboardOutlet />,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
      {
        path: "story",
        element: <Story />
      }

    ]
  }
]);
function App() {
  return <RouterProvider router={router} />
}

export default App
