import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import UserService from "../../services/UserService";
import AuthService from "../../services/AuthService";

export default function SignUpForm({ onToggle, isMobile }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [emailExists, setEmailExists] = useState(false);
    const [error, setError] = useState('');
    const passwordsMatch = formData.password === formData.passwordConfirmation;
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError('');

        if (name === 'name') {
            const nameRegex = /^[a-zа-яё\s-]*$/i;
            setIsValidName(nameRegex.test(value))
        }

        if (name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setIsValidEmail(emailRegex.test(value));
            setEmailExists(false)
        }
    };

    const handleEmailBlur = async () => {
        if (!formData.email) {
            setEmailExists(false);
            return;
        }
        try {
            const result = await UserService.checkExistByEmail(formData.email);
            setEmailExists(result.data);
            if (result.data){
                setError('Адрес Эл. почты уже занят');
            }
            return result.data;
        } catch (err) {
            console.error("Email check failed", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (await handleEmailBlur()) {
            return;
        }

        if (!isValidPassword) {
            setError('Пароли не совпадают');
            return;
        }

        setIsLoading(true);
        try {
            const result = await UserService.register(formData);
            if (result.success) {
                await AuthService.login(formData.email, formData.password);
                navigate('/');
            } else {
                setError(result.error || 'Ошибка при регистрации');
            }
        } catch (err) {
            setError('Техническая ошибка. Попробуйте позже');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`bg-white ${isMobile ? 'p-6 rounded-3xl' : 'p-10 rounded-3xl'} shadow-2xl border border-slate-100 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500`}>
            <h2 className="text-3xl font-black text-slate-950 mb-8 tracking-tighter text-center">Создать аккаунт 🚀</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Ваше имя</label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Меня зовут"
                        className={`w-full px-5 py-3.5 border rounded-xl outline-none transition-all font-medium disabled:bg-slate-50 ${!isValidName ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-400'}`}
                        required
                        disabled={isLoading}
                    />
                </div>
                <div>
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Эл. почта</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleEmailBlur}
                        placeholder="email@mail.com"
                        className={`w-full px-5 py-3.5 border rounded-xl outline-none transition-all font-medium disabled:bg-slate-50 ${(emailExists || (formData.email && !isValidEmail)) ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-400'}`}
                        required
                        disabled={isLoading}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Пароль</label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none transition-all font-medium text-sm"
                            required
                            minLength={6}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 block">Повтор</label>
                        <input
                            name="passwordConfirmation"
                            type="password"
                            value={formData.passwordConfirmation}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className={`w-full px-4 py-3.5 border rounded-xl outline-none transition-all font-medium text-sm ${!passwordsMatch && formData.passwordConfirmation ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-400'}`}
                            required
                        />
                    </div>
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
                        <div className="text-sm font-bold text-red-700 leading-tight">{error}</div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading || emailExists || !passwordsMatch}
                    className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-slate-200 active:scale-[0.98] transition-all hover:bg-slate-900 disabled:bg-slate-400 flex justify-center items-center gap-2"
                >
                    {isLoading ? 'Создаем аккаунт...' : 'Зарегистрироваться'}
                </button>
            </form>

            <div className="mt-8 text-center text-slate-600 font-medium">
                Уже есть аккаунт?{' '}
                <button onClick={onToggle} className="font-bold text-blue-600 hover:underline transition-all">
                    Войти
                </button>
            </div>
        </div>
    );
}