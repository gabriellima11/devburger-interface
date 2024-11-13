import { createBrowserRouter } from 'react-router-dom';

import {
  Login,
  Register,
  Menu,
  Home,
  Cart,
  CompletePayment,
  Checkout,
  Admin,
} from '../containers';
import paths from '../contants/paths';
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
        <Footer />
      </>
    ),
  },
  {
    path: '/complete',
    element: (
      <>
        <Header />
        <CompletePayment />
        <Footer />
      </>
    ),
  },
  {
    path: paths.Order,
    element: (
      <>
        <Header />
        <Admin />
        <Footer />
      </>
    ),
  },
  {
    path: paths.Product,
    element: (
      <>
        <Header />
        <Admin />
        <Footer />
      </>
    ),
  },
  {
    path: paths.EditProduct,
    element: (
      <>
        <Header />
        <Admin />
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: paths.NewProduct,
    element: (
      <>
        <Header />
        <Admin />
        {/* <Footer /> */}
      </>
    ),
  },
]);
