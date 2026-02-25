import TickerTape from './components/TickerTape';
import CyberMarketBackground from './components/CyberMarketBackground';
import AssetCard from './components/AssetCard';
import { motion } from 'framer-motion';
import { Activity, Terminal, Shield, Zap, Power, Cpu, Send } from 'lucide-react';

function App() {
  const assets = [
    {
      title: "Antigravity Engine",
      symbol: "AGV",
      description: "High-performance organic simulation core.",
      stars: 12402,
      forks: 342,
      change: "+14.8%",
      type: "PRIVATE"
    },
    {
      title: "Crystal UI SDK",
      symbol: "CRYS",
      description: "Premium design system for modern tech brands.",
      stars: 8921,
      forks: 156,
      change: "+5.1%",
      type: "PUBLIC"
    },
    {
      title: "Secure Core V4",
      symbol: "SCR4",
      description: "Distributed encryption encryption module.",
      stars: 4501,
      forks: 89,
      change: "-2.3%",
      type: "ASSET"
    }
  ];

  return (
    <div className="relative min-h-screen scanline selection:bg-cyber-blue/30 selection:text-cyber-blue">
      <CyberMarketBackground />
      <TickerTape />

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-20 z-50 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col items-center py-10 gap-8">
        <div className="w-12 h-12 rounded-xl bg-cyber-blue flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(0,204,255,0.4)]">
          G
        </div>
        <nav className="flex flex-col gap-6 mt-10">
          {[Terminal, Activity, Shield, Zap].map((Icon, i) => (
            <button key={i} className="p-3 rounded-lg text-white/20 hover:text-cyber-blue hover:bg-white/5 transition-all">
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="p-3 rounded-lg text-bear/40 hover:text-bear transition-all">
            <Power className="w-5 h-5" />
          </button>
        </div>
      </aside>

      <main className="pl-32 pr-12 pt-24 pb-20">
        {/* Hero Terminal */}
        <section className="mb-20">
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="px-2 py-0.5 bg-bull/10 border border-bull/20 rounded font-mono text-[9px] font-black text-bull uppercase tracking-[0.2em]">System Status: Stable</div>
              <div className="font-mono text-[9px] text-white/20 font-bold">NODE: B-741.EX</div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[10vw] md:text-[88px] font-heading font-black leading-[0.8] tracking-tighter mb-8"
            >
              TRADING <br />
              <span className="text-cyber-blue text-glow">REALITIES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 text-sm md:text-md max-w-[500px] leading-relaxed font-mono"
            >
              &gt; GAEJARAE.SYSTEM IS ONLINE. DEVELOPING HIGH-IMPACT DIGITAL ASSETS FOR THE NEXT GENERATION OF THE WEB.
              CURRENT MARKET SENTIMENT IS <span className="text-bull font-bold">EXTREMELY BULLISH</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex gap-4"
            >
              <button className="px-8 py-3 bg-cyber-blue text-black font-black text-xs uppercase tracking-widest rounded hover:shadow-[0_0_25px_rgba(0,204,255,0.4)] transition-all">Execute Orders</button>
              <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded hover:bg-white/10 transition-all">View Assets</button>
            </motion.div>
          </div>
        </section>

        {/* Asset Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-1 h-6 bg-cyber-blue" />
              <h2 className="text-2xl font-heading font-black uppercase tracking-tighter">Market Portfolio</h2>
            </div>
            <div className="font-mono text-[10px] text-white/30 font-bold uppercase">Total Vol: 4.81M</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset, i) => (
              <AssetCard key={i} {...asset} />
            ))}
          </div>
        </section>

        {/* Bottom Control Pane */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="cyber-pane p-8 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading font-black text-lg uppercase tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyber-blue" /> Core Metrics
              </h3>
              <div className="flex gap-1 text-[8px] font-mono font-black text-white/20">
                <span>R-1</span><span>/</span><span>X-9</span><span>/</span><span>Z-0</span>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: "Engineering Velocity", val: "94.2%", color: "bg-bull" },
                { label: "Stability Index", val: "99.9%", color: "bg-cyber-blue" },
                { label: "Innovation Surge", val: "88.4%", color: "bg-white" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between font-mono text-[10px] uppercase font-bold text-white/40 mb-2">
                    <span>{s.label}</span>
                    <span>{s.val}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: s.val }}
                      className={`h-full ${s.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-pane p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl font-heading font-black uppercase tracking-tighter mb-4 text-glow">READY FOR<br />STAKEHOLDERS</h3>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-10">Direct Terminal Communication Only</p>
            <div className="flex gap-4 w-full">
              <input type="text" placeholder="ENTER MESSAGE..." className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 flex-1 font-mono text-xs focus:outline-none focus:border-cyber-blue transition-all" />
              <button className="w-14 h-14 bg-white text-black rounded-lg flex items-center justify-center hover:bg-cyber-blue transition-all">
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="pl-32 pr-12 py-10 border-t border-white/5 flex justify-between items-center bg-black/40">
        <div className="font-mono text-[9px] font-bold text-white/20 uppercase tracking-[0.5em]">GAEJARAE.TERMINAL © 2026</div>
        <div className="flex gap-8 font-mono text-[9px] font-bold text-white/10 uppercase hover:text-white/40 transition-all cursor-pointer">
          <span>Auth: OK</span>
          <span>Region: KR-SEOUL</span>
          <span>Uptime: 24d 18h 42m</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
