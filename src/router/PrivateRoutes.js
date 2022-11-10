import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../authcontext/AutProvider'

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
   
    if (loading) {
        return <div className='w-screen h-screen'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto"></div></div>
    }
    if (user && user.uid) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />

    }
}

export default PrivateRouter