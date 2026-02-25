import { Search, Bell, Plus, Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="glass sticky top-0 z-50 border-b border-muted">
            <div className="container flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                    <Github className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" />
                    <div className="relative group hidden md:block">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-tertiary" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search or jump to..."
                            className="bg-secondary border border-border-default rounded-md py-1.5 pl-10 pr-3 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-all"
                        />
                        <div className="absolute right-2 top-1.5 border border-border-default rounded px-1 text-[10px] text-tertiary group-focus-within:hidden">
                            /
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-4 text-sm font-semibold text-text-primary">
                        <a href="#" className="hover:text-text-secondary">Pull requests</a>
                        <a href="#" className="hover:text-text-secondary">Issues</a>
                        <a href="#" className="hover:text-text-secondary">Marketplace</a>
                        <a href="#" className="hover:text-text-secondary">Explore</a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-text-primary hover:text-text-secondary transition-colors">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-1 text-text-primary hover:text-text-secondary transition-colors">
                        <Plus className="w-5 h-5" />
                        <span className="text-xs">▼</span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-green cursor-pointer border border-border-default shadow-sm hover:scale-105 transition-transform" />
                </div>
            </div>

            <style>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        nav .container {
          padding: 0 1.5rem;
        }
        @media (max-width: 1024px) {
          .lg-hidden { display: none; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
