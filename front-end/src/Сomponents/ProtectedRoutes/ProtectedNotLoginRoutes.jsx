import {Outlet, Navigate} from 'react-router-dom';

import AuthService from "../../services/AuthService";

const ProtectedNotLoginRoutes = () => {

    const isAuthenticated = AuthService.isAuthenticated();
    return isAuthenticated ? <Navigate to="/account"/> : <Outlet/>

}

export default ProtectedNotLoginRoutes;