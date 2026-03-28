import SignInForm from '../../../components/common/SignInForm';
import SignUpForm from '../../common/SignUpForm.jsx';

export default function HomeDesktop({screen, setScreen, isMobile}) {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-12 relative overflow-hidden font-sans text-slate-950">

            <div className="fixed top-6 right-6 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-slate-100 font-bold text-[11px] uppercase tracking-wider z-50">
                💻 Desktop
            </div>

            <div className="container max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                <div className="space-y-6">
                    <h1 className="text-8xl font-black italic tracking-tighter leading-none animate-in fade-in slide-in-from-left-8 duration-700">
                        TripAgent<span className="text-blue-600">.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium max-w-md leading-relaxed animate-in fade-in delay-200 duration-1000">
                        Умный контроль расходов в путешествиях. Делите чеки, считайте бюджет и забудьте о рутине.
                    </p>
                </div>

                <div className="flex justify-center min-h-[500px] transition-all duration-500">

                    {screen === 'welcome' && (
                        <div className="grid grid-cols-1 gap-4 w-full max-w-sm self-center animate-in fade-in zoom-in-95 duration-500">
                            <button onClick={() => setScreen('sign-in')}
                                    className="bg-white p-7 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-400 hover:translate-y-[-4px] transition-all text-left group active:scale-95">
                                <div className="text-3xl mb-4">👋</div>
                                <h3 className="text-xl font-bold">Я уже с вами</h3>
                                <span className="text-blue-600 font-bold">Войти →</span>
                            </button>

                            <button onClick={() => setScreen('sign-up')}
                                    className="bg-slate-950 p-7 rounded-3xl shadow-2xl shadow-slate-400/20 text-white hover:bg-slate-800 hover:translate-y-[-4px] transition-all text-left group active:scale-95">
                                <span className="text-3xl mb-2 block">🚀</span>
                                <h3 className="text-xl font-bold">Я новенький</h3>
                                <span className="text-orange-400 font-bold">Создать аккаунт →</span>
                            </button>
                        </div>
                    )}

                    {screen === 'sign-in' && (
                        <div
                            className="w-full flex flex-col items-center animate-in fade-in slide-in-from-right-8 duration-500">
                            <SignInForm isMobile={isMobile} onToggle={() => setScreen('sign-up')}/>
                            <button onClick={() => setScreen('welcome')} className="mt-8 text-slate-400 hover:text-slate-950 font-bold transition-colors uppercase text-[10px] tracking-widest flex items-center gap-2">
                                <span>←</span> Назад к выбору
                            </button>
                        </div>
                    )}

                    {screen === 'sign-up' && (
                        <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-right-8 duration-500">
                            <SignUpForm isMobile={isMobile} onToggle={() => setScreen('sign-in')}/>
                            <button onClick={() => setScreen('welcome')} className="mt-8 text-slate-400 hover:text-slate-950 font-bold transition-colors uppercase text-[10px] tracking-widest flex items-center gap-2">
                                <span>←</span> Назад к выбору
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}