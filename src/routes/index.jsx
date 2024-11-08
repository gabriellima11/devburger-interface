import { createBrowserRouter } from 'react-router-dom';

import {
  Login,
  Register,
  Menu,
  Home,
  Cart,
  CompletePayment,
  Checkout,
} from '../containers';
import { Header, Footer } from '../components';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/menu',
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: '/carrinho',
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: '/checkout',
    element: (
      <>
        <Header />
        <Checkout />
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: '/complete',
    element: (
      <>
        <Header />
        <CompletePayment />
        {/* <Footer /> */}
      </>
    ),
  },
]);
