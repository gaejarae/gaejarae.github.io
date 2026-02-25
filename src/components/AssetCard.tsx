import { ArrowUpRight, Globe, Star, GitFork, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const AssetCard = ({ title, symbol, change, stars, forks, type, description }: any) => {
    const isUp = change.startsWith('+');

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="cyber-pane p-6 group transition-all duration-300 hover:border-cyber-blue relative overflow-hidden"
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-[9px] font-black px-1.5 py-0.5 rounded ${isUp ? 'bg-bull/10 text-bull' : 'bg-bear/10 text-bear'}`}>
                            ${symbol}
                        </span>
                        <span className="font-mono text-[9px] text-white/20 font-bold uppercase tracking-widest">{type}</span>
                    </div>
                    <h3 className="text-xl font-heading font-black text-white group-hover:text-cyber-blue transition-colors">{title}</h3>
                </div>
                <div className={`font-mono text-sm font-bold ${isUp ? 'text-bull' : 'text-bear'}`}>
                    {change}
                </div>
            </div>

            <p className="text-[11px] text-white/40 font-medium leading-relaxed mb-6 h-8 line-clamp-2">
                {description}
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5">
                <div>
                    <div className="font-mono text-[9px] text-white/20 font-bold uppercase mb-1 tracking-tighter flex items-center gap-1">
                        <Star className="w-2.5 h-2.5" /> 스타 가치
                    </div>
                    <div className="font-mono text-lg font-bold text-white/90">{stars.toLocaleString()}</div>
                </div>
                <div className="text-right">
                    <div className="font-mono text-[9px] text-white/20 font-bold uppercase mb-1 tracking-tighter flex items-center justify-end gap-1">
                        <GitFork className="w-2.5 h-2.5" /> 포크 유동성
                    </div>
                    <div className="font-mono text-lg font-bold text-white/90">{forks}</div>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center"><BookOpen className="w-3 h-3 text-white/30" /></div>
                    <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center"><Globe className="w-3 h-3 text-white/30" /></div>
                </div>
                <button className="flex items-center gap-2 font-mono text-[10px] font-bold text-cyber-blue opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    상세 실행 <ArrowUpRight className="w-3 h-3" />
                </button>
            </div>

            <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[64px] transition-opacity duration-500 opacity-0 group-hover:opacity-10 ${isUp ? 'bg-bull' : 'bg-bear'}`} />
        </motion.div>
    );
};

export default AssetCard;
