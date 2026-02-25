import TickerTape from './components/TickerTape';
import CyberMarketBackground from './components/CyberMarketBackground';
import AssetCard from './components/AssetCard';
import { Activity, Shield, Power, Cpu, Send, Layout, Github } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const assets = [
    {
      title: "프리미엄 데이터 대시보드",
      symbol: "DASH",
      description: "금융 데이터 시각화를 위한 고성능 실시간 차트 시스템.",
      stars: 12402,
      forks: 342,
      change: "+14.8%",
      type: "PROJECT"
    },
    {
      title: "AI 기반 코드 어시스턴트",
      symbol: "AICA",
      description: "LLM을 활용한 개발 생산성 극대화 도구 및 플러인.",
      stars: 8921,
      forks: 156,
      change: "+5.1%",
      type: "PRIVATE"
    },
    {
      title: "분산 네트워크 엔진",
      symbol: "DNET",
      description: "P2P 통신 및 암호화 보안 강화를 위한 백엔드 코어 모듈.",
      stars: 4501,
      forks: 89,
      change: "-2.3%",
      type: "LIBRARY"
    }
  ];

  return (
    <div className="relative min-h-screen scanline selection:bg-cyber-blue/30 selection:text-cyber-blue flex flex-col items-center">
      <CyberMarketBackground />
      <TickerTape />

      {/* 플로팅 내비게이션 (오른쪽 사이드 또는 중앙 상단) */}
      <nav className="fixed top-8 z-50 px-6 py-3 rounded-full border border-white/5 bg-black/40 backdrop-blur-xl flex items-center gap-8">
        <div className="w-8 h-8 rounded-lg bg-cyber-blue flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(0,204,255,0.4)]">
          G
        </div>
        <div className="flex gap-6">
          {[Github, Layout, Activity, Shield].map((Icon, i) => (
            <button key={i} className="text-white/40 hover:text-cyber-blue transition-all">
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
        <button className="ml-4 text-bear/60 hover:text-bear transition-all">
          <Power className="w-4 h-4" />
        </button>
      </nav>

      <main className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center mx-auto relative z-10">
        {/* 메인 히어로 섹션 - 배경을 위한 넉넉한 공간 */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="px-4 py-1.5 bg-bull/10 border border-bull/20 rounded-full font-mono text-[11px] font-black text-bull uppercase tracking-[0.3em] inline-block mb-4">GAEJARAE.SYSTEM : ONLINE</div>
            <div className="font-mono text-[10px] text-white/20 font-bold uppercase tracking-widest">STABLE CONNECTIVITY SECURED</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[14vw] md:text-[140px] font-heading font-black leading-[0.8] tracking-tighter mb-10 text-glow uppercase text-center"
          >
            가치를<br />
            <span className="text-cyber-blue">코드화하다</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/40 text-sm md:text-xl max-w-[700px] leading-relaxed font-mono mb-16 text-center"
          >
            데이터의 흐름을 통제하고, 자생하는 디지털 자산을 건축합니다.<br />
            당신의 영감으로 완성되는 <span className="text-bull font-bold">하이엔드 퀀트 터미널</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="flex gap-8">
              <button className="px-12 py-4 bg-cyber-blue text-black font-black text-xs uppercase tracking-[0.4em] rounded-full hover:shadow-[0_0_40px_rgba(0,204,255,0.7)] hover:scale-105 transition-all">접속하기</button>
              <button className="px-12 py-4 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.4em] rounded-full hover:bg-white/10 transition-all">백서 조회</button>
            </div>

            <div className="flex flex-col items-center gap-4 mt-12 opacity-20">
              <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
              <span className="text-[10px] font-mono font-bold tracking-[0.5em] uppercase">Scroll to Discover</span>
            </div>
          </motion.div>
        </section>

        {/* 저장소/자산 그리드 - 배경과 겹치지 않게 더 큰 여백 */}
        <section id="portfolio" className="w-full py-60 flex flex-col items-center">
          <div className="flex flex-col items-center mb-24 text-center">
            <div className="w-16 h-1 bg-cyber-blue mb-8 shadow-[0_0_15px_rgba(0,204,255,0.5)]" />
            <h2 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-6">개발 데이터 자산</h2>
            <p className="text-white/20 font-mono text-xs md:text-sm uppercase tracking-[0.3em]">Selected High-Impact Repositories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
            {assets.map((asset, i) => (
              <AssetCard key={i} {...asset} />
            ))}
          </div>
        </section>

        {/* 핵심 성과 지표 & 터미널 */}
        <section className="w-full pb-40 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cyber-pane p-10 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-heading font-black text-2xl uppercase tracking-tight flex items-center gap-3">
                <Cpu className="w-6 h-6 text-cyber-blue" /> 성과 통계 데이터
              </h3>
            </div>
            <div className="space-y-8">
              {[
                { label: "코드 안정성", val: "99.9%", color: "bg-cyber-blue" },
                { label: "배포 가치지수", val: "94.2%", color: "bg-bull" },
                { label: "인터랙션 품질", val: "88.4%", color: "bg-white" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between font-mono text-xs uppercase font-bold text-white/40 mb-3">
                    <span>{s.label}</span>
                    <span>{s.val}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
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

          <div className="cyber-pane p-10 flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl font-heading font-black uppercase tracking-tighter mb-4 text-glow">터미널 연결</h3>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-12">DIRECT COMMAND INTERFACE v4.0</p>
            <div className="flex gap-4 w-full max-w-md">
              <input type="text" placeholder="시스템에 메시지 전송..." className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 flex-1 font-mono text-xs focus:outline-none focus:border-cyber-blue transition-all" />
              <button className="w-16 h-16 bg-white text-black rounded-xl flex items-center justify-center hover:bg-cyber-blue transition-all shadow-xl">
                <Send className="w-7 h-7" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 border-t border-white/5 flex flex-col items-center bg-black/60 relative z-10">
        <div className="font-mono text-[10px] font-bold text-white/20 uppercase tracking-[0.8em] mb-4">GAEJARAE.SYSTEM © 2026</div>
        <div className="flex gap-12 font-mono text-[9px] font-bold text-white/10 uppercase tracking-widest">
          <span>REGION: KR-SEOUL</span>
          <span>AUTH: VERIFIED</span>
          <span>UPTIME: 24:18:42</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
