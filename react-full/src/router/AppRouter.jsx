import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import ErrorPage from '../pages/ErrorPages';
import { lazy } from 'react';
import TodForm from '../components/todo/TodForm';

// LAZY LOADING ROUTES
const HomePage = lazy(() => import('../pages/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: '/create-todo',
            element: <TodForm />,
         },
         {
            path: '/edit-todo/:id',
            element: <TodForm />,
         },
         {
            path: '*',
            element: <NotFoundPage />,
         },
      ],
   },
]);

const AppRouter = () => {
   return (
      <RouterProvider router={router}>
         {/* inserire qui eventuali wrapper aggiuntivi */}
      </RouterProvider>
   );
};

export default AppRouter;
