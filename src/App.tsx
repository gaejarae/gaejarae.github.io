import Navbar from './components/Navbar';
import TickerTape from './components/TickerTape';
import ProjectCard from './components/ProjectCard';
import { BarChart, ShieldCheck, Zap, Target, Cpu, Layers, ArrowUpRight } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Antigravity Engine",
      symbol: "AGV",
      description: "Organic motion simulation for high-end web applications.",
      stars: 1240,
      forks: 342,
      change: "+12.4%",
      data: [10, 15, 12, 18, 22, 20, 25, 28, 32],
      type: "Public" as const
    },
    {
      title: "Crystal UI Kit",
      symbol: "CRYS",
      description: "Premium Glassmorphism component library for modern brands.",
      stars: 890,
      forks: 156,
      change: "+5.8%",
      data: [30, 28, 35, 32, 40, 38, 42, 45, 50],
      type: "Public" as const
    },
    {
      title: "Iridescent Dash",
      symbol: "IRID",
      description: "Real-time data visualization with liquid gradients.",
      stars: 2100,
      forks: 567,
      change: "+24.2%",
      data: [5, 12, 8, 20, 15, 25, 35, 30, 48],
      type: "Public" as const
    },
    {
      title: "Secure Core",
      symbol: "SCR",
      description: "Rust-based encryption layer for distributed networks.",
      stars: 450,
      forks: 89,
      change: "-2.1%",
      data: [50, 48, 45, 47, 42, 40, 38, 35, 30],
      type: "Public" as const
    }
  ];

  return (
    <div className="relative min-h-screen pb-20 pt-32">
      <TickerTape />
      <Navbar />

      <main className="container max-w-[1240px] px-6">
        {/* Header Section */}
        <section className="mt-12 mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 dashboard-pane p-10 relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-bull/10 text-bull font-mono text-[10px] font-black rounded uppercase tracking-widest border border-bull/20">Market Status: Bullish</span>
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase">Uptime: 99.99%</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-slate-900 leading-[0.85] mb-8">
                TRADING <br />
                <span className="text-market-blue">IMPOSSIBLE</span> <br />
                REALITIES.
              </h2>
              <div className="flex gap-4">
                <button className="px-8 py-3.5 bg-slate-900 text-white rounded-lg font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">Start Execution</button>
                <button className="px-8 py-3.5 border-2 border-slate-900 rounded-lg font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all">View Assets</button>
              </div>
            </div>
            {/* Background Graph Decorative */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-1/4 translate-x-1/4">
              <svg width="600" height="400" viewBox="0 0 600 400">
                <path d="M0 400 L50 350 L100 380 L150 200 L200 250 L250 100 L300 150 L350 50 L400 80 L450 20 L500 60 L550 10 L600 40" fill="none" stroke="#3b82f6" strokeWidth="20" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="dashboard-pane p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter">My Stats</h3>
                <BarChart className="w-6 h-6 text-market-blue" />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-bull/10 flex items-center justify-center text-bull"><Zap className="w-4 h-4" /></div>
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase">Velocity</span>
                  </div>
                  <span className="font-mono font-bold text-lg">9.4/s</span>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-market-blue/10 flex items-center justify-center text-market-blue"><ShieldCheck className="w-4 h-4" /></div>
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase">Integrity</span>
                  </div>
                  <span className="font-mono font-bold text-lg">100%</span>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-purple-600"><Layers className="w-4 h-4" /></div>
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase">Deployments</span>
                  </div>
                  <span className="font-mono font-bold text-lg">4,281</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-market-border">
              <p className="font-mono text-[10px] text-slate-500 font-bold leading-relaxed tracking-tight">
                GAEJARAE.SYSTEM: [ONLINE] READY TO TRANSFORM DIGITAL LANDSCAPES WITH HIGH-SPEED EXECUTION.
              </p>
            </div>
          </div>
        </section>

        {/* Assets / Projects Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-market-blue rounded-full" />
              <h2 className="text-3xl font-heading font-black uppercase tracking-tighter">Active Portfolio Assets</h2>
            </div>
            <div className="flex gap-2">
              <span className="font-mono text-[10px] font-black p-2 border border-market-border rounded bg-white">ALL ASSETS</span>
              <span className="font-mono text-[10px] font-black p-2 bg-slate-900 text-white rounded">FILTER: GROWTH</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </section>

        {/* Global Market Overview / Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="dashboard-pane p-8">
            <h3 className="font-heading font-black text-xl uppercase tracking-tighter mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-bull" /> Strategic Pillars
            </h3>
            <div className="space-y-4">
              {[
                { name: "Frontend Engineering", val: 98, color: "bg-market-blue" },
                { name: "Creative Interaction", val: 95, color: "bg-bull" },
                { name: "Performance Optimization", val: 92, color: "bg-purple-600" },
                { name: "System Architecture", val: 88, color: "bg-slate-900" }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-[11px] font-mono font-bold uppercase mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${skill.color}`} style={{ width: `${skill.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-pane p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-[0.02] transition-opacity" />
            <Cpu className="w-12 h-12 text-slate-300 mb-6 group-hover:text-market-blue transition-colors group-hover:rotate-12 duration-500" />
            <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Market Execution Ready</h3>
            <p className="text-sm text-slate-500 max-w-[300px] mb-8">
              새로운 데이터를 분석하고 더 큰 가치를 창출할 준비가 되어 있습니다. 지금 바로 연결하십시오.
            </p>
            <button className="flex items-center gap-2 font-mono text-[11px] font-black uppercase text-market-blue tracking-widest hover:gap-4 transition-all">
              Open Terminal <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-market-border py-12 px-6">
        <div className="container max-w-[1240px] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-40">
            <div className="w-8 h-8 rounded bg-slate-400" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest">© 2026 GAEJARAE — QUANT ASSET</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-[10px] font-bold text-slate-400 hover:text-slate-900 uppercase">Privacy</a>
            <a href="#" className="font-mono text-[10px] font-bold text-slate-400 hover:text-slate-900 uppercase">Terms</a>
            <a href="#" className="font-mono text-[10px] font-bold text-slate-400 hover:text-slate-900 uppercase">Network Status</a>
            <a href="#" className="font-mono text-[10px] font-bold text-market-blue hover:underline uppercase tracking-tighter">Contact Root</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
