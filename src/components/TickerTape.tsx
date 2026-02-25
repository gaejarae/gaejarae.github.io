import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const tickerData = [
    { symbol: "REACT", price: "19.0.0", change: "+12.4%", trend: "up" },
    { symbol: "VITE", price: "6.0.0", change: "+8.2%", trend: "up" },
    { symbol: "TYPESCRIPT", price: "5.7", change: "+5.1%", trend: "up" },
    { symbol: "TAILWIND", price: "4.0", change: "+15.9%", trend: "up" },
    { symbol: "GAEJARAE", price: "BULL", change: "+999%", trend: "up" },
    { symbol: "NEXTJS", price: "15.1", change: "+3.2%", trend: "up" },
    { symbol: "FRAMER", price: "11.0", change: "+6.7%", trend: "up" },
    { symbol: "LUCIDE", price: "0.41", change: "+2.1%", trend: "up" },
];

const TickerTape = () => {
    return (
        <div className="ticker-container fixed top-0 left-0 w-full z-[100] h-10 overflow-hidden flex items-center">
            <div className="animate-ticker whitespace-nowrap flex py-2">
                {[...tickerData, ...tickerData].map((item, idx) => (
                    <div key={idx} className="inline-flex items-center mx-8 gap-2">
                        <span className="font-mono font-bold text-[11px] text-[#64748b]">
                            ${item.symbol}
                        </span>
                        <span className="font-mono text-[11px] text-[#0f172a]">
                            {item.price}
                        </span>
                        <span className={`font-mono text-[11px] flex items-center gap-1 ${item.trend === 'up' ? 'text-bull' : 'text-bear'}`}>
                            {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {item.change}
                        </span>
                    </div>
                ))}
            </div>
            <div className="absolute right-0 h-full px-4 bg-white/90 backdrop-blur-sm border-l border-market-border flex items-center gap-2">
                <Activity className="w-4 h-4 text-market-blue animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-tight">Market Live</span>
            </div>
        </div>
    );
};

export default TickerTape;
