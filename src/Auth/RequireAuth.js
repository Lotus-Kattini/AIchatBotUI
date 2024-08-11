import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal';

function RequireAuth() {
    const cookie = Cookie();
    const email=cookie.get('email')
    const nav=useNavigate()
  return (
    <>
        {email ?<Outlet/> : <Navigate to={'/'} replace={true}/>}
    </>
  )
}

export default RequireAuth