import TickerTape from './components/TickerTape';
import CyberMarketBackground from './components/CyberMarketBackground';
import AssetCard from './components/AssetCard';
import { Activity, Shield, Power, Cpu, Send, Layout, Github } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const assets = [
    {
      title: "Antigravity Engine",
      symbol: "AGV",
      description: "고성능 유기적 모션 시뮬레이션 엔진. 부드러운 인터랙션을 위한 최적화.",
      stars: 12402,
      forks: 342,
      change: "+14.8%",
      type: "PRIVATE"
    },
    {
      title: "Crystal UI SDK",
      symbol: "CRYS",
      description: "모던 테크 브랜드를 위한 프리미엄 글래스모피즘 컴포넌트 라이브러리.",
      stars: 8921,
      forks: 156,
      change: "+5.1%",
      type: "PUBLIC"
    },
    {
      title: "Secure Core V4",
      symbol: "SCR4",
      description: "분산 네트워크를 위한 Rust 기반 고성능 암호화 모듈.",
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

      {/* 왼쪽 내비게이션 바 */}
      <aside className="fixed left-0 top-0 h-full w-20 z-50 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col items-center py-10 gap-8">
        <div className="w-12 h-12 rounded-xl bg-cyber-blue flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(0,204,255,0.4)]">
          G
        </div>
        <nav className="flex flex-col gap-6 mt-10">
          {[Github, Layout, Activity, Shield].map((Icon, i) => (
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
        {/* 메인 히어로 섹션 */}
        <section className="mb-20">
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="px-2 py-0.5 bg-bull/10 border border-bull/20 rounded font-mono text-[9px] font-black text-bull uppercase tracking-[0.2em]">시스템 상태: 안정화됨</div>
              <div className="font-mono text-[9px] text-white/20 font-bold uppercase">노드: B-741.GAEJARAE</div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[10vw] md:text-[88px] font-heading font-black leading-[0.8] tracking-tighter mb-8"
            >
              거래하는<br />
              <span className="text-cyber-blue text-glow">현실들</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 text-sm md:text-md max-w-[500px] leading-relaxed font-mono"
            >
              &gt; GAEJARAE.SYSTEM 접속 중. 차세대 웹을 위한 고부가가치 디지털 자산을 구축합니다.
              현재 시장 심리는 <span className="text-bull font-bold">매우 낙관적(BULLISH)</span>입니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex gap-4"
            >
              <button className="px-8 py-3 bg-cyber-blue text-black font-black text-xs uppercase tracking-widest rounded hover:shadow-[0_0_25px_rgba(0,204,255,0.4)] transition-all">실행 명령</button>
              <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded hover:bg-white/10 transition-all">자산 조회</button>
            </motion.div>
          </div>
        </section>

        {/* 저장소/자산 그리드 */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-1 h-6 bg-cyber-blue" />
              <h2 className="text-2xl font-heading font-black uppercase tracking-tighter">개발 데이터 포트폴리오</h2>
            </div>
            <div className="font-mono text-[10px] text-white/30 font-bold uppercase">총 유동성: 4.81M</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset, i) => (
              <AssetCard key={i} {...asset} />
            ))}
          </div>
        </section>

        {/* 핵심 성과 지표 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="cyber-pane p-8 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading font-black text-lg uppercase tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyber-blue" /> 핵심 성과 엔진
              </h3>
              <div className="flex gap-1 text-[8px] font-mono font-black text-white/20">
                <span>R-1</span><span>/</span><span>X-9</span><span>/</span><span>Z-0</span>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: "엔지니어링 속도", val: "94.2%", color: "bg-bull" },
                { label: "시스템 안정성", val: "99.9%", color: "bg-cyber-blue" },
                { label: "혁신 성장률", val: "88.4%", color: "bg-white" }
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
            <h3 className="text-3xl font-heading font-black uppercase tracking-tighter mb-4 text-glow">터미널 연결 대기 중</h3>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-10">스테이크홀더 직접 통신 프로토콜</p>
            <div className="flex gap-4 w-full">
              <input type="text" placeholder="메시지 입력..." className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 flex-1 font-mono text-xs focus:outline-none focus:border-cyber-blue transition-all" />
              <button className="w-14 h-14 bg-white text-black rounded-lg flex items-center justify-center hover:bg-cyber-blue transition-all">
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="pl-32 pr-12 py-10 border-t border-white/5 flex justify-between items-center bg-black/40">
        <div className="font-mono text-[9px] font-bold text-white/20 uppercase tracking-[0.5em]">© 2026 GAEJARAE — QUANT DEV ASSET</div>
        <div className="flex gap-8 font-mono text-[9px] font-bold text-white/10 uppercase hover:text-white/40 transition-all cursor-pointer">
          <span>인증: 정상</span>
          <span>지역: 대한민국-서울</span>
          <span>업타임: 24d 18h 42m</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
