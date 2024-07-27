import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from '../components/layout/HomeLayout';
import MainLayout from '../components/layout/MainLayout';
import ErrorPage from '../pages/ErrorPages';
import { lazy, Suspense } from 'react';

// LAZY LOADING ROUTES
const Home = lazy(() => import('../pages/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const RealHome = lazy(() => import('../pages/RealHome'));
const Orari = lazy(() => import('../pages/Orari'));
const Offerte = lazy(() => import('../pages/Offerte'));

// ROUTER
const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: '/app',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'realhome',
				element: <RealHome />,
			},

			{
				path: 'orari',
				element: <Orari />,
			},
			{
				path: 'offerte',
				element: <Offerte />,
			},
			// Altre rotte per MainLayout
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
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default AppRouter;
