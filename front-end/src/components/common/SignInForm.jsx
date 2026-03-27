import { useState } from 'react';

export default function SignInForm({ onToggle, isMobile }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Попытка входа:', { email, password });
        alert(`Вход (заглушка):\nEmail: ${email}`);
    };

    return (
        <div className={`bg-white ${isMobile ? 'p-6 rounded-3xl' : 'p-10 rounded-3xl'} shadow-2xl border border-slate-100 w-full max-w-md animate-in fade-in slide-in-from-bottom-4`}>
            <h2 className="text-3xl font-black text-slate-950 mb-8 tracking-tighter">С возвращением! 👋</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@provider.com"
                        className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all font-medium"
                        required
                    />
                </div>

                <div>
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Пароль</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all font-medium"
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-all hover:bg-blue-700">
                    Войти
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