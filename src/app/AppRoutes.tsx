import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { cities } from 'api';
import CityPage from 'pages/CityPage';
import HomePage from 'pages/HomePage';
import Layout from 'pages/Layout';
import PrintPage from 'pages/PrintPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/city/:city',
        loader: ({ params }) => {
          if (!cities.includes(params.city || '')) throw new Error();

          return null;
        },
        // errorElement: <Navigate to="/" />,
        element: <CityPage />,
      },
    ],
  },
  {
    path: '/print',
    element: <PrintPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
