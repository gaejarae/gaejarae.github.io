const tickerData = [
    { symbol: "BTC", price: "98,241.00", change: "+4.2%", trend: "up" },
    { symbol: "ETH", price: "2,742.50", change: "-1.5%", trend: "down" },
    { symbol: "SOL", price: "184.20", change: "+12.4%", trend: "up" },
    { symbol: "REACT", price: "19.0.0", change: "+0.4%", trend: "up" },
    { symbol: "GAEJARAE", price: "ULTRA", change: "+99.9%", trend: "up" },
    { symbol: "BULLISH", price: "STABLE", change: "+5.1%", trend: "up" },
];

const TickerTape = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-[100] h-8 overflow-hidden flex items-center bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="animate-ticker whitespace-nowrap flex py-1">
                {[...tickerData, ...tickerData, ...tickerData].map((item, idx) => (
                    <div key={idx} className="inline-flex items-center mx-6 gap-2">
                        <span className="font-mono font-bold text-[10px] text-white/40 tracking-tighter">
                            {item.symbol}
                        </span>
                        <span className="font-mono text-[10px] text-white/90">
                            {item.price}
                        </span>
                        <span className={`font-mono text-[10px] flex items-center gap-1 ${item.trend === 'up' ? 'text-bull' : 'text-bear'}`}>
                            {item.trend === 'up' ? '▲' : '▼'} {item.change}
                        </span>
                    </div>
                ))}
            </div>
            <div className="absolute right-0 h-full px-4 bg-black/90 border-l border-white/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-bull animate-pulse shadow-[0_0_8px_#00ff88]" />
                <span className="font-mono text-[9px] font-black uppercase text-white/50">Terminal Live</span>
            </div>
        </div>
    );
};

export default TickerTape;
