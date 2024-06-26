import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./assets/Router/Router.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from 'react-hot-toast'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Toaster />
    </QueryClientProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
