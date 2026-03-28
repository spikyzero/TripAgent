import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthService from "../../services/AuthService";

export default function Header() {

    const isAuthenticated = AuthService.isAuthenticated();
    const navigate = useNavigate();
    const location = useLocation();

    if (!isAuthenticated) return null;

    const handleLogout = () => {
        AuthService.logout();
        navigate("/login");
    };

    return (
        <header className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-lg border-b border-slate-100 h-16 flex items-center shrink-0">
            <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-black italic tracking-tighter text-slate-950">
                        TripAgent<span className="text-blue-600">.</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className={`text-sm font-bold transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'}`}
                    >
                        Дашборд
                    </Link>
                    <Link
                        to="/trips"
                        className={`text-sm font-bold transition-colors ${location.pathname === '/trips' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'}`}
                    >
                        Мои поездки
                    </Link>
                    <Link
                        to="/expenses"
                        className={`text-sm font-bold transition-colors ${location.pathname === '/expenses' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-950'}`}
                    >
                        Расходы
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-end mr-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Пользователь</span>
                        <span className="text-sm font-bold text-slate-900">ID: {AuthService.getUserId()?.substring(0, 5)}</span>
                    </div>
                    <button onClick={handleLogout} className="flex items-center gap-2 bg-slate-100 hover:bg-red-50 hover:text-red-600 px-4 py-2 rounded-xl transition-all font-bold text-sm text-slate-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        <span>Выйти</span>
                    </button>
                </div>
            </div>
        </header>
    );
}