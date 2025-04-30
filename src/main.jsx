import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Welcome from './pages/Welcome.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { I18nProvider } from './i18n.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "welcome",
    element: <Welcome />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </React.StrictMode>
)
