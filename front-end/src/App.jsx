import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Сomponents/common/Header.jsx";
import LoginPage from './Сomponents/Pages/Login/LoginPage.jsx';
import HomePage from "./Сomponents/Pages/Home/HomePage.jsx";
import ProtectedNotLoginRoutes from "./Сomponents/ProtectedRoutes/ProtectedNotLoginRoutes.jsx";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route element={<ProtectedNotLoginRoutes/>}>
                    <Route path="/" element={<LoginPage />} />
                </Route>
                <Route path="/account" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default App;