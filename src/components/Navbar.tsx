import { Github, MessageCircle } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-10 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-market-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin [animation-duration:3s]" />
                    </div>
                    <div>
                        <h1 className="font-heading font-black text-xl tracking-tighter uppercase leading-none">GAE JARAE</h1>
                        <p className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Terminal Terminal v4.0</p>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-6 border-l border-market-border pl-8">
                    {['Overview', 'Portfolio', 'Insights', 'Contact'].map(link => (
                        <a key={link} href="#" className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors relative group">
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-market-blue transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end mr-4">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">24H CHANGE</span>
                    <span className="font-mono text-sm font-bold text-bull text-right">+24.8% ▲</span>
                </div>
                <button className="p-2.5 rounded-lg border border-market-border hover:bg-slate-50 transition-colors">
                    <Github className="w-5 h-5" />
                </button>
                <button className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                    Connect <MessageCircle className="w-4 h-4" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
