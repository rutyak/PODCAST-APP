import React from 'react'
import { auth } from '../firebase'
import { useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return <p>Loading...</p>
  }
  else if(!user || error){
    return <Navigate to="/" replace />
  }
  else{
    return <Outlet />
  }
}

export default PrivateRouter
