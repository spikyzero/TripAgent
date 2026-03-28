import SignInForm from '../../common/SignInForm';
import SignUpForm from '../../common/SignUpForm.jsx';

export default function LoginMobile({screen, setScreen, isMobile}) {
    return (
        <div className="min-h-svh bg-slate-50 p-6 flex flex-col relative overflow-hidden font-sans">

            <div className="fixed top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-100 font-bold text-[10px] uppercase z-50">
                📱 Mobile
            </div>

            <div className="flex-1 flex flex-col items-center justify-center z-10">
                <h1 className="text-5xl font-black italic tracking-tighter text-slate-950 mb-12 animate-in fade-in slide-in-from-top-4">
                    TripAgent<span className="text-blue-600">.</span>
                </h1>

                {screen === 'welcome' && (
                    <div className="flex flex-col gap-4 w-full animate-in fade-in zoom-in-95">
                        <button onClick={() => setScreen('sign-in')} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-left active:scale-95 transition-all">
                            <span className="text-3xl mb-2 block">👋</span>
                            <h3 className="text-xl font-bold">Я уже с вами</h3>
                            <span className="text-blue-600 font-bold">Войти →</span>
                        </button>
                        <button onClick={() => setScreen('sign-up')} className="bg-slate-950 p-8 rounded-3xl shadow-xl text-left active:scale-95 transition-all text-white">
                            <span className="text-3xl mb-2 block">🚀</span>
                            <h3 className="text-xl font-bold">Я новенький</h3>
                            <span className="text-orange-400 font-bold">Создать аккаунт →</span>
                        </button>
                    </div>
                )}

                {screen === 'sign-in' && (
                    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SignInForm isMobile={isMobile} onToggle={() => setScreen('sign-up')} />
                        <button onClick={() => setScreen('welcome')} className="mt-8 text-slate-500 font-bold uppercase text-[11px] tracking-widest">
                            ← Назад
                        </button>
                    </div>
                )}

                {screen === 'sign-up' && (
                    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <SignUpForm isMobile={isMobile} onToggle={() => setScreen('sign-in')} />
                        <button onClick={() => setScreen('welcome')} className="mt-8 text-slate-500 font-bold uppercase text-[11px] tracking-widest">
                            ← Назад
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}