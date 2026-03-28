import {Outlet, Navigate} from 'react-router-dom';

import AuthService from "../../services/AuthService";

const ProtectedLoginRoutes = () => {

    const isAuthenticated = AuthService.isAuthenticated();
    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>

}

export default ProtectedLoginRoutes;