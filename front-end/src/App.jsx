import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/common/Header.jsx";
import HomePage from './components/pages/home/HomePage.jsx';
import AccountPage from "./components/pages/account/AccountPage.jsx";
import ProtectedNotLoginRoutes from "./components/ProtectedRoutes/ProtectedNotLoginRoutes.jsx";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route element={<ProtectedNotLoginRoutes/>}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="/account" element={<AccountPage />} />
            </Routes>
        </Router>
    )
}

export default App;