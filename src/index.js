import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import Settings from "./pages/Settings";
import NoPage from "./pages/NoPage"
import { FronteggProvider } from '@frontegg/react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const contextOptions = {
  baseUrl: 'baseUrl' ,  // Login URL from Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page
  clientId: 'clientId'  // Client ID from Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page
};

const authOptions = {
  keepSessionAlive: true,
  // routes: {
    // authenticatedUrl: '/settings',
    // hostedLoginRedirectUrl: '/settings',
  // }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <FronteggProvider contextOptions={contextOptions} authOptions={authOptions}>
          <App />
        </FronteggProvider>
      }
    >
       <Route path="settings" element={<Settings />} />
       <Route path="*" element={<NoPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);