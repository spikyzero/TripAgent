import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/AuthService.js";

export default function SignInForm({ onToggle, isMobile }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const data = await AuthService.login(email, password);
            console.log('Login successful', data);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            setError('Упс! Проверьте введенные данные');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`bg-white ${isMobile ? 'p-6 rounded-3xl' : 'p-10 rounded-3xl'} shadow-2xl border border-slate-100 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500`}>
            <h2 className="text-3xl font-black text-slate-950 mb-8 tracking-tighter">С возвращением! 👋</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@provider.com"
                        className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all font-medium disabled:bg-slate-50"
                        required
                        disabled={isLoading}
                    />
                </div>
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Пароль</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all font-medium disabled:bg-slate-50"
                        required
                        disabled={isLoading}
                    />
                </div>

                {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-50/50 border border-red-100 rounded-2xl animate-in fade-in zoom-in-95 duration-300">
                        <div className="shrink-0 mt-0.5">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" className="fill-red-100 stroke-red-500" strokeWidth="2"/>
                                <path d="M12 8V13" className="stroke-red-600" strokeWidth="2" strokeLinecap="round"/>
                                <circle cx="12" cy="16" r="1" className="fill-red-600"/>
                            </svg>
                        </div>
                        <div className="text-sm font-bold text-red-700 leading-tight">
                            {error}
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full ${isLoading ? 'bg-slate-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-all flex justify-center items-center gap-2`}
                >
                    {isLoading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Входим...
                        </>
                    ) : 'Войти'}
                </button>
            </form>

            <div className="mt-8 text-center text-slate-600">
                Нет аккаунта?{' '}
                <button onClick={onToggle} className="font-bold text-blue-600 hover:underline">
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
}