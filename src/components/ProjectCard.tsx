import { BarChart3, Star, GitFork, Lock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Sparkline from './Sparkline';

interface ProjectCardProps {
    title: string;
    symbol: string;
    description: string;
    stars: number;
    forks: number;
    change: string;
    data: number[];
    type: "Public" | "Private";
}

const ProjectCard = ({ title, symbol, description, stars, forks, change, data, type }: ProjectCardProps) => {
    const isUp = change.startsWith('+');

    return (
        <motion.div
            whileHover={{ y: -2, scale: 1.01 }}
            className="dashboard-pane p-5 hover:border-market-blue transition-all group overflow-hidden relative cursor-pointer"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${isUp ? 'bg-bull' : 'bg-market-blue'}`}>
                        {symbol.charAt(0)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-heading font-black text-lg tracking-tight leading-none uppercase">{title}</h3>
                            <span className="font-mono text-[9px] font-black px-1.5 py-0.5 border border-market-border rounded text-slate-400">
                                {symbol}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5">
                            {type === 'Public' ? <Globe className="w-3 h-3 text-slate-400" /> : <Lock className="w-3 h-3 text-slate-400" />}
                            <span className="font-mono text-[10px] text-slate-400 font-bold uppercase">{type} ASSET</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className={`font-mono text-sm font-black ${isUp ? 'text-bull' : 'text-bear'}`}>
                        {change} {isUp ? '▲' : '▼'}
                    </div>
                    <div className="font-mono text-[9px] text-slate-400 font-bold uppercase mt-1">24H PERFORMANCE</div>
                </div>
            </div>

            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6 h-8 line-clamp-2 italic">
                "{description}"
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-5">
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <Star className="w-3.5 h-3.5" />
                        <span className="font-mono text-[9px] font-bold uppercase">PRICE (STARS)</span>
                    </div>
                    <span className="font-mono font-bold text-lg">{stars.toLocaleString()}.00</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <GitFork className="w-3.5 h-3.5" />
                        <span className="font-mono text-[9px] font-bold uppercase">VOL (FORKS)</span>
                    </div>
                    <span className="font-mono font-bold text-lg">{forks.toLocaleString()}</span>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-market-border flex items-end justify-between">
                <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-slate-400 font-bold uppercase mb-2">ACTIVITY STREAM</span>
                    <Sparkline data={data} color={isUp ? "#10b981" : "#3b82f6"} width={140} height={30} />
                </div>
                <button className="p-2 border border-market-border rounded-md hover:bg-slate-50 group transition-all">
                    <BarChart3 className="w-4 h-4 text-slate-400 group-hover:text-market-blue transition-colors" />
                </button>
            </div>

            {/* Decorative Scanline */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </motion.div>
    );
};

export default ProjectCard;
