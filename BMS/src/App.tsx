import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from './pages/Home.tsx';
import { Academics } from './pages/Academics.tsx';
import { Admissions } from './pages/Admissions.tsx';
import { Innovation } from './pages/Innovation.tsx';
import { CampusLife } from './pages/CampusLife.tsx';
import { About } from './pages/About.tsx';
import { LifelongLearning } from './pages/LifelongLearning.tsx';
import { Research } from './pages/Research.tsx';
import { News } from './pages/News.tsx';
import { Alumni } from './pages/Alumni.tsx';
import { Profile } from './pages/Profile.tsx';

function NavLink({ to, children, className = "" }: { to: string, children: React.ReactNode, className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to={to} className={`text-bms-cream hover:text-bms-warmGold transition-colors ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <header className="bg-bms-surface/80 backdrop-blur-md border-b border-bms-border/50 px-6 py-4 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 gap-4 md:gap-0">
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <Link to="/" className="shrink-0">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-display text-bms-crimson tracking-wide uppercase"
            >
              BMSIT
            </motion.h1>
          </Link>
          <button className="md:hidden block text-bms-cream">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>
        </div>
        <nav className="hidden md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] lg:text-[13px] font-sans font-bold uppercase tracking-wider">
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/innovation">Innovation</NavLink>
          <NavLink to="/campus-life">Campus Life</NavLink>
          <NavLink to="/about">About BMSIT</NavLink>
          <NavLink to="/lifelong-learning">Lifelong Learning</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/admissions">Admissions + Aid</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/alumni">Alumni</NavLink>
          <NavLink to="/profile" className="ml-2 pl-2 border-l border-bms-border/50 text-bms-warmGold">Student Profile</NavLink>
        </nav>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Academics />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/about" element={<About />} />
          <Route path="/lifelong-learning" element={<LifelongLearning />} />
          <Route path="/research" element={<Research />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/news" element={<News />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <footer className="bg-bms-surface border-t border-bms-border py-8 px-8 mt-12">
        <div className="text-center text-bms-muted text-sm font-sans">
          &copy; {new Date().getFullYear()} BMS Institute of Technology & Management. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
