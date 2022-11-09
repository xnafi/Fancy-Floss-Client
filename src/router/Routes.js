import { createBrowserRouter } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import ErrorPage from '../components/EroorPage'
import Faq from '../components/Faq'
import Home from '../components/Home'
import Login from '../components/Login'
import Service from '../components/Service'
import Services from '../components/Services'
import SignUp from '../components/SignUp'
import Main from '../main/Main'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index : true,
                element: <Home />
            },
            {
                path : '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />,
                loader : ()=> fetch('http://localhost:5000/services')
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
            ,
            {
                path: '/service/:id',
                element: <Service/>,
                loader : ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
    }
])