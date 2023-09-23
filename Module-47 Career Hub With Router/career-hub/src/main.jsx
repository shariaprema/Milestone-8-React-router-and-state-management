import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blogs from './components/Blogs/Blogs';
import Jobs from './components/Jobs/Jobs';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json')
        
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },

      {
        path: "/jobs/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('jobs.json'),
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>
      },

    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
