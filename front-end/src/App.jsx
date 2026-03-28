import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Сomponents/common/Header.jsx";
import HomePage from "./Сomponents/Pages/Home/HomePage.jsx";
import LoginPage from './Сomponents/Pages/Login/LoginPage.jsx';
import ProtectedLoginRoutes from "./Сomponents/ProtectedRoutes/ProtectedLoginRoutes.jsx";
import ProtectedNotLoginRoutes from "./Сomponents/ProtectedRoutes/ProtectedNotLoginRoutes.jsx";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route element={<ProtectedNotLoginRoutes/>}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<ProtectedLoginRoutes/>}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;