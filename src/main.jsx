import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';
import stripePromise from './config/stripeConfig';
import { Elements } from '@stripe/react-stripe-js';

//Routes
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

//Global styles
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyles />
      <ToastContainer theme="colored" />
    </AppProvider>
  </StrictMode>,
);
