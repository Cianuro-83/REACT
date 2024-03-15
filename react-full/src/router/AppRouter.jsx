import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import ErrorPage from '../pages/ErrorPages';
import { lazy } from 'react';

// LAZY LOADING ROUTES
const HomePage = lazy(() => import('../pages/Home'));
const CreateTodo = lazy(() => import('../components/TodForm'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const EditTodo = lazy(() => import('../components/TodForm'));

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
            element: <CreateTodo />,
         },
         {
            path: '/edit-todo/:id',
            element: <EditTodo />,
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
