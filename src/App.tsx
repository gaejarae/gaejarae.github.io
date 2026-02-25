import Navbar from './components/Navbar';
import FluidMeshBackground from './components/FluidMeshBackground';
import ProjectCard from './components/ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Github, Twitter, Mail, ExternalLink, Sparkles } from 'lucide-react';

function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const projects = [
    {
      title: "Antigravity Engine",
      description: "High-performance simulation engine for organic motion and fluid dynamics in web environments.",
      tags: ["TypeScript", "Canvas", "Physics"],
      image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Crystal UI Kit",
      description: "A premium set of Glassmorphism components for high-end digital agency portfolios.",
      tags: ["React", "Framer Motion", "CSS"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Iridescent Dash",
      description: "Data visualization dashboard with real-time liquid gradient backgrounds and 3D interactions.",
      tags: ["Next.js", "D3.js", "WebGL"],
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Magnetic Core",
      description: "An open-source library for creating natural-feeling magnetic and tactile user interfaces.",
      tags: ["Rust", "Wasm", "React"],
      image: "https://images.unsplash.com/photo-1642427749670-f20e2e76ee8c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <FluidMeshBackground />
      <Navbar />

      <main className="container pt-40 pb-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 px-4 py-1.5 rounded-full bg-white/50 border border-white text-[11px] font-bold tracking-[0.2em] text-violet-600 uppercase flex items-center gap-2 shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            Future-Ready Design
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[12vw] md:text-[80px] leading-[0.9] font-heading font-black text-[#111] tracking-tighter"
          >
            DESIGNING THE <br />
            <span className="text-gradient">FUTURE OF WEB</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-lg md:text-xl text-[#555] max-w-[600px] leading-relaxed font-light"
          >
            최신 기술 트렌드를 반영한 고퀄리티 포트폴리오 사이트입니다.<br />
            <span className="font-semibold text-[#111]">Vite, React, Tailwind CSS</span>를 활용하여 제작되었습니다.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-10 py-4 bg-[#111] text-white rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-violet-200">
              View Projects
            </button>
            <button className="px-10 py-4 bg-white/50 backdrop-blur-md border border-white rounded-full font-bold text-sm text-[#111] hover:bg-white transition-all shadow-sm">
              Contact Me
            </button>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section ref={targetRef} className="mt-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4 gap-4">
            <div>
              <h2 className="text-4xl font-black font-heading tracking-tight text-[#111]">SELECTED WORKS</h2>
              <p className="text-[#666] mt-2">창의적이고 실험적인 디지털 경험들</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-violet-600 hover:gap-4 transition-all">
              Explore All <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <motion.div
            style={{ opacity, scale }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </motion.div>
        </section>

        {/* Contact Strip */}
        <section className="mt-40 flex flex-col items-center">
          <div className="cloudy-glass p-8 md:p-12 rounded-[32px] w-full flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1000px]">
            <div>
              <h3 className="text-3xl font-black font-heading text-[#111]">LET'S CREATE SOMETHING<br />LEGENDARY TOGETHER</h3>
              <p className="text-[#666] mt-3">새로운 도전은 언제나 환영입니다.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-sm"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-sm"><Github className="w-6 h-6" /></a>
              <a href="mailto:hello@gaejarae.com" className="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-xl"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 py-10 border-t border-gray-100 px-8 text-center">
        <p className="text-[12px] font-bold text-[#999] tracking-widest uppercase">© 2026 GAE JARAE — CRAFTED WITH PASSION</p>
      </footer>
    </div>
  );
}

export default App;
