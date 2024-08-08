import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import HomeLayout from '../components/layout/HomeLayout';
import MainLayout from '../components/layout/MainLayout';
import OrariLayout from '../components/layout/OrariLayout';
import ErrorPage from '../pages/ErrorPages';
import Statua from '../pages/Statua';
import SantAnna from '../pages/SantAnna';
import CookieConsent from 'react-cookie-consent';

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
const Canada = lazy(() => import('../pages/nelMondo/Canada'));
const India = lazy(() => import('../pages/nelMondo/India'));
const Messico = lazy(() => import('../pages/nelMondo/Messico'));
const Peru = lazy(() => import('../pages/nelMondo/Peru'));
const StatiUniti = lazy(() => import('../pages/nelMondo/StatiUniti'));
const CenniStorici = lazy(() => import('../pages/storia/CenniStorici'));
const CultoMariano = lazy(() => import('../pages/storia/CultoMariano'));
const CultoPagano = lazy(() => import('../pages/storia/CultoPagano'));
const LaPiaLeggenda = lazy(() => import('../pages/storia/LaPiaLeggenda'));
const Origini = lazy(() => import('../pages/chiesa/Origini.jsx'));
const XxSecolo = lazy(() => import('../pages/chiesa/XxSecolo.jsx'));
const XxiSecolo = lazy(() => import('../pages/chiesa/XxiSecolo.jsx'));
const CasaDelPellegrina = lazy(() =>
	import('../pages/chiesa/CasaDelPellegrina')
);
const Windsor = lazy(() => import('../pages/nelMondo/canada/Windsor'));
const Montreal = lazy(() => import('../pages/nelMondo/canada/Montreal.jsx'));
const Toronto = lazy(() => import('../pages/nelMondo/canada/Toronto'));
const SainteMarguerite = lazy(() =>
	import('../pages/nelMondo/canada/SainteMarguerite')
);
const Bronks = lazy(() => import('../pages/nelMondo/usa/Bronks'));
const Milford = lazy(() => import('../pages/nelMondo/usa/Milford'));
const NewCanaan = lazy(() => import('../pages/nelMondo/usa/NewCanaan'));
const Stanford = lazy(() => import('../pages/nelMondo/usa/Stanford'));
const Whitestone = lazy(() => import('../pages/nelMondo/usa/Whitestone'));
const PrivacyPpolicy = lazy(() => import('../pages/PrivacyPpolicy.jsx'));

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
				path: 'privacy-policy',
				element: <PrivacyPpolicy />,
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
			{
				path: 'statua',
				element: <Statua />,
			},
			{
				path: 'sant-anna',
				element: <SantAnna />,
			},
			{
				path: 'canada',
				element: <Canada />,
			},
			{
				path: 'india',
				element: <India />,
			},
			{
				path: 'messico',
				element: <Messico />,
			},
			{
				path: 'peru',
				element: <Peru />,
			},
			{
				path: 'stati-uniti',
				element: <StatiUniti />,
			},
			{
				path: 'storia/cenni-storici',
				element: <CenniStorici />,
			},
			{
				path: 'storia/culto-mariano',
				element: <CultoMariano />,
			},
			{
				path: 'storia/culto-pagano',
				element: <CultoPagano />,
			},
			{
				path: 'storia/pia-leggenda',
				element: <LaPiaLeggenda />,
			},
			{
				path: 'chiesa/dal-719-al-xix-secolo',
				element: <Origini />,
			},
			{
				path: 'chiesa/xx-secolo',
				element: <XxSecolo />,
			},
			{
				path: 'chiesa/xxi-secolo',
				element: <XxiSecolo />,
			},
			{
				path: 'chiesa/casa-pellegrino',
				element: <CasaDelPellegrina />,
			},
			{
				path: 'canada/windsor',
				element: <Windsor />,
			},
			{
				path: 'canada/montreal',
				element: <Montreal />,
			},
			{
				path: 'canada/toronto',
				element: <Toronto />,
			},
			{
				path: 'canada/sainte-marguerite-du-lac-masson',
				element: <SainteMarguerite />,
			},
			{
				path: 'usa/broks',
				element: <Bronks />,
			},
			{
				path: 'usa/milford',
				element: <Milford />,
			},
			{
				path: 'usa/new-canaan',
				element: <NewCanaan />,
			},
			{
				path: 'usa/stanford',
				element: <Stanford />,
			},
			{
				path: 'usa/whitestone',
				element: <Whitestone />,
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
			<CookieConsent
				location="bottom"
				buttonText="Accetta"
				cookieName="myAwesomeCookieName"
				style={{ background: '#2B373B' }}
				buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
				expires={150}>
				Questo sito utilizza i cookie per migliorare l'esperienza utente.{' '}
				<Link to="app/privacy-policy">
					<span
						className="text-decoration-underline"
						style={{ color: '#4e503b' }}>
						Leggi di più
					</span>
				</Link>
			</CookieConsent>
		</Suspense>
	);
};

export default AppRouter;
