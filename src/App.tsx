import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import RepoCard from './components/RepoCard';
import ContributionGraph from './components/ContributionGraph';
import { motion } from 'framer-motion';

const pinnedRepos = [
  {
    name: 'premium-gh-portfolio',
    description: 'A world-class, visually stunning GitHub-inspired portfolio page built with React, Vite and Tailwind.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 1245,
    forks: 48
  },
  {
    name: 'magic-ui-components',
    description: 'Highly interactive and smooth UI components for modern web applications with Framer Motion.',
    language: 'React',
    languageColor: '#61dafb',
    stars: 2890,
    forks: 156
  },
  {
    name: 'antigravity-engine',
    description: 'Core engine for agentic coding assistants with focus on velocity, accuracy, and aesthetics.',
    language: 'Rust',
    languageColor: '#dea584',
    stars: 3205,
    forks: 289
  },
  {
    name: 'design-tokens-pro',
    description: 'Guidelines and tokens for creating premium user experiences in modern Light Mode applications.',
    language: 'CSS',
    languageColor: '#563d7c',
    stars: 145,
    forks: 22
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[296px_1fr] gap-x-8 gap-y-12">
          {/* Sidebar */}
          <aside className="lg:pr-4">
            <ProfileSidebar />
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            {/* Nav Tabs */}
            <div className="flex gap-5 border-b border-[#d8dee4] mb-8 sticky top-[64px] bg-white z-40 overflow-x-auto no-scrollbar">
              {[
                { name: 'Overview', icon: '📖' },
                { name: 'Repositories', icon: '📦', count: 42 },
                { name: 'Projects', icon: '📋' },
                { name: 'Packages', icon: '📦' },
                { name: 'Stars', icon: '⭐', count: 128 }
              ].map((tab, i) => (
                <div
                  key={tab.name}
                  className={`pb-3 px-1.5 cursor-pointer transition-all border-b-2 flex items-center gap-2 whitespace-nowrap text-sm ${i === 0 ? 'border-[#fd8c73] font-semibold text-[#1f2328]' : 'border-transparent text-[#636c76] hover:border-[#d0d7de]'
                    }`}
                >
                  <span className="opacity-70 text-xs">{tab.icon}</span>
                  {tab.name}
                  {tab.count && (
                    <span className="px-2 py-0.5 bg-[#f0f2f5] text-[#1f2328] rounded-full text-[10px] font-bold">
                      {tab.count}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <section className="animate-fade">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-semibold font-heading text-[#1f2328]">Pinned Projects</h2>
                <span className="text-[12px] text-[#636c76] hover:text-blue-600 cursor-pointer transition-colors font-medium">Customize your pins</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {pinnedRepos.map((repo, i) => (
                  <motion.div
                    key={repo.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <RepoCard {...repo} />
                  </motion.div>
                ))}
              </div>
            </section>

            <ContributionGraph />

            <section className="mt-12 mb-16 border-t border-[#d8dee4] pt-10">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-sm font-bold font-heading text-[#636c76] uppercase tracking-wider">3D Activity Globe</h3>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px] font-bold uppercase">Experimental</span>
              </div>
              <div className="aspect-[24/10] bg-[#f6f8fa] rounded-2xl border border-[#d0d7de] flex items-center justify-center relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-green-50/20" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-[300px] h-[300px] rounded-full border border-dashed border-blue-200/50 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-[200px] h-[200px] rounded-full border border-green-200/50 flex items-center justify-center"
                  />
                </motion.div>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-3xl animate-pulse" />
                  <p className="text-[13px] font-semibold text-[#636c76] glass px-6 py-2.5 rounded-full shadow-lg border-white/50">
                    Interactive Globe Engine Initializing...
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="border-t border-[#d8dee4] py-12 text-[12px] text-[#636c76] bg-[#f6f8fa]/50">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5">
            <span className="font-medium">© 2026 Gae Jarae, Inc.</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-blue-600 transition-colors">Docs</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact GitHub</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-blue-600 transition-colors">API</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Training</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Blog</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
