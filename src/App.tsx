import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import RepoCard from './components/RepoCard';
import ContributionGraph from './components/ContributionGraph';
import { motion } from 'framer-motion';

const pinnedRepos = [
  {
    name: 'premium-gh-portfolio',
    description: 'A world-class, visually stunning GitHub-inspired portfolio page built with React and Vite.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 245,
    forks: 12
  },
  {
    name: 'magic-ui-components',
    description: 'Highly interactive and smooth UI components for modern web applications.',
    language: 'React',
    languageColor: '#61dafb',
    stars: 890,
    forks: 56
  },
  {
    name: 'antigravity-engine',
    description: 'Core engine for agentic coding assistants with focus on velocity and accuracy.',
    language: 'Rust',
    languageColor: '#dea584',
    stars: 1205,
    forks: 89
  },
  {
    name: 'world-class-aesthetics',
    description: 'Guidelines and tokens for creating premium user experiences in Light Mode.',
    language: 'CSS',
    languageColor: '#563d7c',
    stars: 45,
    forks: 2
  }
];

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside>
            <ProfileSidebar />
          </aside>

          {/* Main Content */}
          <main>
            {/* Nav Tabs (Stylized) */}
            <div className="flex gap-4 border-b border-muted mb-6 text-sm overflow-x-auto">
              {['Overview', 'Repositories', 'Projects', 'Packages', 'Stars'].map((tab, i) => (
                <div
                  key={tab}
                  className={`pb-3 px-2 cursor-pointer transition-all border-b-2 whitespace-nowrap ${i === 0 ? 'border-[#fd8c73] font-semibold text-text-primary' : 'border-transparent text-text-secondary hover:border-border-default'
                    }`}
                >
                  {tab}
                </div>
              ))}
            </div>

            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-medium">Pinned</h2>
                <span className="text-xs text-text-tertiary hover:text-accent-blue cursor-pointer">Customize your pins</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pinnedRepos.map((repo, i) => (
                  <motion.div
                    key={repo.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <RepoCard {...repo} />
                  </motion.div>
                ))}
              </div>
            </section>

            <ContributionGraph />

            <section className="mt-8 border-t border-muted pt-8 pb-12">
              <h3 className="text-sm font-semibold mb-4 text-text-tertiary">3D CONTRIBUTION GLOBE (PROBING...)</h3>
              <div className="aspect-[2/1] bg-secondary rounded-lg border border-border-default flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-green/10" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full border-2 border-dashed border-accent-blue/30 flex items-center justify-center"
                >
                  <div className="w-40 h-40 rounded-full border border-accent-green/30" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm font-medium text-text-secondary glass px-4 py-2 rounded-full">Interactive Visualizer Loaded</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="border-t border-muted py-10 text-xs text-text-tertiary">
        <div className="container flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span>© 2026 Gae Jarae, Inc.</span>
            <a href="#" className="hover:text-accent-blue">Terms</a>
            <a href="#" className="hover:text-accent-blue">Privacy</a>
            <a href="#" className="hover:text-accent-blue">Security</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent-blue">Docs</a>
            <a href="#" className="hover:text-accent-blue">Contact GitHub</a>
            <a href="#" className="hover:text-accent-blue">Pricing</a>
            <a href="#" className="hover:text-accent-blue">API</a>
            <a href="#" className="hover:text-accent-blue">Training</a>
            <a href="#" className="hover:text-accent-blue">Blog</a>
            <a href="#" className="hover:text-accent-blue">About</a>
          </div>
        </div>
      </footer>

      <style>{`
        .grid-cols-\[280px_1fr\] {
          grid-template-columns: 280px 1fr;
        }
        @media (max-width: 1024px) {
          .grid-cols-\[280px_1fr\] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
