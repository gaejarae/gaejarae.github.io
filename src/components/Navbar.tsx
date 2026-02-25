import { Search, Bell, Plus, Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="glass sticky top-0 z-50 border-b border-[#d8dee4]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                    <Github className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity" />
                    <div className="relative group hidden md:block">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-[#6e7781]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search or jump to..."
                            className="bg-[#f6f8fa] border border-[#d0d7de] rounded-md py-1.5 pl-10 pr-3 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans"
                        />
                    </div>
                    <div className="hidden lg:flex gap-4 text-sm font-semibold">
                        <a href="#" className="hover:text-blue-600 transition-colors">Pull requests</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Issues</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Marketplace</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Explore</a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                        <Bell className="w-5 h-5 text-[#1f2328]" />
                    </button>
                    <button className="flex items-center gap-1 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                        <Plus className="w-5 h-5 text-[#1f2328]" />
                        <span className="text-[10px]">▼</span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0969da] to-[#1f883d] cursor-pointer border border-[#d0d7de] shadow-sm hover:scale-110 transition-transform ml-1" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
