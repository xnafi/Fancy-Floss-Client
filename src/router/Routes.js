import { createBrowserRouter } from 'react-router-dom'
import Main from '../main/Main'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    }
])