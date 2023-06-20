import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import Layout from '../src/components/Layout';

//
import Home from './pages/Home';
import Servicii from './pages/Servicii';
import Produse from './pages/Produse';
import Contact from './pages/Contact';
import Error from './pages/Error';


// ----------------------------------------------------------------------

export default function Router(props) {
  return useRoutes([
    {
      path: '/servicii',
      element: <Layout/>,
      children: [
        { path: '', element: <Servicii /> },
      ],
    },
    {
      path: '/produse',
      element: <Layout />,
      children: [
        { path: '', element: <Produse /> },
      ],
    },
    {
      path: '/contact',
      element: <Layout />,
      children: [
        { path: '', element: <Contact /> },
      ],
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
      ],
    },
    { path: '*', element: <Error /> },
  ]);
}
