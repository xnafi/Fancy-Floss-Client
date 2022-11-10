import { createBrowserRouter } from 'react-router-dom'
import AddService from '../components/AddService'
import ErrorPage from '../components/EroorPage'
import Faq from '../components/Faq'
import Home from '../components/Home'
import Login from '../components/Login'
import MyReviews from '../components/MyReviews'
import Service from '../components/Service'
import Services from '../components/Services'
import SignUp from '../components/SignUp'
import Main from '../main/Main'
import PrivateRouter from './PrivateRoutes'
import Blog from '../components/Blog'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('https://dentus-server-side.vercel.app/services')
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
            ,
            {
                path: '/reviews',
                element: <PrivateRouter><MyReviews /></PrivateRouter>
            }
            ,
            {
                path: '/addservice',
                element: <PrivateRouter><AddService /></PrivateRouter>
            }
            ,
            {
                path: '/service/:id',
                element: <Service />,
                loader: ({ params }) => fetch(`https://dentus-server-side.vercel.app/service/${params.id}`)
            }
        ]
    }
])