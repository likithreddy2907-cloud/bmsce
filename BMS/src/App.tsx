import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { Innovation } from './pages/Innovation';
import { CampusLife } from './pages/CampusLife';
import { About } from './pages/About';
import { LifelongLearning } from './pages/LifelongLearning';
import { Research } from './pages/Research';
import { News } from './pages/News';
import { Alumni } from './pages/Alumni';
import { Profile } from './pages/Profile';
import { Menu, X } from 'lucide-react';
import { BMSITChatbot } from './components/BMSITChatbot';

const NAV_LINKS = [
  { to: '/education', label: 'Education' },
  { to: '/innovation', label: 'Innovation' },
  { to: '/campus-life', label: 'Campus Life' },
  { to: '/about', label: 'About BMSIT' },
  { to: '/lifelong-learning', label: 'Lifelong Learning' },
  { to: '/research', label: 'Research' },
  { to: '/admissions', label: 'Admissions + Aid' },
  { to: '/news', label: 'News' },
  { to: '/alumni', label: 'Alumni' },
];

function DesktopNavLink({ to, children, className = '' }: { to: string; children: React.ReactNode; className?: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className={`transition-colors ${isActive ? 'text-bms-warmGold' : 'text-bms-cream hover:text-bms-warmGold'} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <header className="bg-bms-surface/90 backdrop-blur-md border-b border-bms-border/50 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="shrink-0 flex items-center gap-3 group">
          <img
            src="/bmsit-logo.svg"
            alt="BMSIT Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] xl:text-[13px] font-sans font-bold uppercase tracking-wider">
          {NAV_LINKS.map((link) => (
            <DesktopNavLink key={link.to} to={link.to}>{link.label}</DesktopNavLink>
          ))}
          <DesktopNavLink to="/profile" className="ml-2 pl-2 border-l border-bms-border/50 text-bms-warmGold">
            Student Profile
          </DesktopNavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-bms-cream hover:text-bms-warmGold hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 top-[65px] z-40 bg-bms-surface/98 backdrop-blur-xl border-t border-bms-border/50 overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    to={link.to}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-bms-cream hover:text-bms-warmGold hover:bg-white/5 font-sans font-bold uppercase tracking-wider text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="mt-4 pt-4 border-t border-bms-border/50"
              >
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-bms-crimson/10 text-bms-warmGold hover:bg-bms-crimson/20 font-sans font-bold uppercase tracking-wider text-sm transition-colors"
                >
                  Student Profile
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

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

      <footer className="bg-bms-surface border-t border-bms-border py-8 px-4 sm:px-8 mt-12">
        <div className="text-center text-bms-muted text-sm font-sans">
          &copy; {new Date().getFullYear()} BMS Institute of Technology &amp; Management. All rights reserved.
        </div>
      </footer>
      {/* Global draggable chatbot — available on every page */}
      <BMSITChatbot />
    </div>
  );
}

export default App;
