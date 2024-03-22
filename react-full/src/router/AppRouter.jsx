import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ErrorPage from '../pages/ErrorPages';
import { lazy, Suspense } from 'react';

// LAZY LOADING ROUTES
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const CommentPage = lazy(() => import('../pages/CommentPage'));
const HomePage = lazy(() => import('../pages/Home'));
const TodForm = lazy(() => import('../components/todo/TodForm'));

// ROUTER
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
            path: '/comments',
            element: <CommentPage />,
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
      <Suspense fallback={<div>Loading...</div>}>
         <RouterProvider router={router}>
            {/* inserire qui eventuali wrapper aggiuntivi */}
         </RouterProvider>
      </Suspense>
   );
};

export default AppRouter;
