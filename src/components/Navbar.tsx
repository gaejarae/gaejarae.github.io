import { Github, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[800px]"
        >
            <div className="cloudy-glass rounded-full px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                        G
                    </div>
                    <span className="font-heading font-bold tracking-tight text-[#111]">GAE JARAE</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-[#444]">
                    <a href="#" className="hover:text-violet-600 transition-colors">Home</a>
                    <a href="#" className="hover:text-violet-600 transition-colors">About</a>
                    <a href="#" className="hover:text-violet-600 transition-colors">Projects</a>
                    <a href="#" className="hover:text-violet-600 transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-3">
                    <a href="https://github.com/gaejarae" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-[#111] hover:text-violet-600 transition-colors" />
                    </a>
                    <button className="md:hidden">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
