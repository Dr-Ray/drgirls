import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './custom.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InteriorDesign from './screens/interiorDesign';
import LandingPage from './screens/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/design",
    element: <InteriorDesign />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
