import { createBrowserRouter } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import ErrorPage from '../components/EroorPage'
import Faq from '../components/Faq'
import Home from '../components/Home'
import Services from '../components/Services'
import Main from '../main/Main'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/faq',
                element: <Faq />
            }
        ]
    }
])