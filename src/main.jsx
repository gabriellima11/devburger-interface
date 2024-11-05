import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';

//Routes
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

//Global styles
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer theme="colored" />
    </AppProvider>
  </StrictMode>,
);
