import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from '../components/layout/HomeLayout';
import MainLayout from '../components/layout/MainLayout';
import OrariLayout from '../components/layout/OrariLayout';
import ErrorPage from '../pages/ErrorPages';
import { lazy, Suspense } from 'react';

// LAZY LOADING ROUTES
const Home = lazy(() => import('../pages/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const RealHome = lazy(() => import('../pages/RealHome'));
const Orari = lazy(() => import('../pages/Orari'));
const Offerte = lazy(() => import('../pages/Offerte'));
const InniHome = lazy(() => import('../pages/inni/InniHome'));
const EvvivaMaria = lazy(() => import('../pages/inni/EvvivaMaria'));
const Gemmiti = lazy(() => import('../pages/inni/Gemmiti'));
const AffettiPensieri = lazy(() => import('../pages/inni/AffettiPensieri'));
const InnoIncoronazione = lazy(() => import('../pages/inni/InnoIncoronazione'));
const CelesteMessaggera = lazy(() => import('../pages/inni/CelesteMessaggera'));
const EditoriaHome = lazy(() => import('../pages/editoria/EditoriaHome'));
const Bollettino = lazy(() => import('../pages/editoria/Bollettino'));
const Quaderni = lazy(() => import('../pages/editoria/Quaderni'));
const Calendario = lazy(() => import('../pages/editoria/Calendario'));
const Testi = lazy(() => import('../pages/editoria/Testi'));
const PellegrinaggioHome = lazy(() =>
	import('../pages/pellegrinaggio/PellegrinaggioHome')
);
const PellegrinaggioCompagnie = lazy(() =>
	import('../pages/pellegrinaggio/PellegrinaggioCompagnie')
);
const PellegrinnaggioFeste = lazy(() =>
	import('../pages/pellegrinaggio/PellegrinnaggioFeste')
);
const Contatti = lazy(() => import('../pages/info/Contatti'));
const ComeRaggingerci = lazy(() => import('../pages/info/ComeRaggingerci'));

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
				path: 'offerte',
				element: <Offerte />,
			},
			{
				path: 'inni/home',
				element: <InniHome />,
			},
			{
				path: 'inni/evvivamaria',
				element: <EvvivaMaria />,
			},
			{
				path: 'inni/incoronazione',
				element: <InnoIncoronazione />,
			},
			{
				path: 'inni/messaggera',
				element: <CelesteMessaggera />,
			},
			{
				path: 'inni/aquino',
				element: <AffettiPensieri />,
			},
			{
				path: 'inni/gemmiti',
				element: <Gemmiti />,
			},
			{
				path: 'editoria/home',
				element: <EditoriaHome />,
			},
			{
				path: 'editoria/bollettino',
				element: <Bollettino />,
			},
			{
				path: 'editoria/quaderni',
				element: <Quaderni />,
			},
			{
				path: 'editoria/calendari',
				element: <Calendario />,
			},
			{
				path: 'editoria/testi',
				element: <Testi />,
			},
			{
				path: 'pellegrinaggio/home',
				element: <PellegrinaggioHome />,
			},
			{
				path: 'pellegrinaggio/compagnie',
				element: <PellegrinaggioCompagnie />,
			},
			{
				path: 'pellegrinaggio/feste',
				element: <PellegrinnaggioFeste />,
			},
			{
				path: 'info/contatti',
				element: <Contatti />,
			},
			{
				path: 'info/come-raggiungerci',
				element: <ComeRaggingerci />,
			},

			// Altre rotte per MainLayout
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: '/orari',
		element: <OrariLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'orari',
				element: <Orari />,
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
