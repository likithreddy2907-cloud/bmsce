import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ArrowRight, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';
import { ScrollHero3D } from '../components/ScrollHero3D';

interface Program {
  id: string;
  name: string;
  type: string;
  nba_accredited: boolean;
  intake: number;
  duration_years: number;
}

export function Home() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);

  useEffect(() => {
    async function getPrograms() {
      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .limit(3);
      if (!error && data) {
        setPrograms(data);
      }
    }
    getPrograms();
  }, []);

  return (
    <div className="flex flex-col relative w-full overflow-hidden">
      
      {/* Scroll-Triggered Hero Section (Sticky) */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden sticky top-0 -z-10">
        <ScrollHero3D />
        
        <motion.div 
          className="relative z-10 text-center max-w-5xl px-4 pointer-events-auto mt-[-10vh]"
          style={{ opacity: heroOpacity, y: heroY, willChange: 'transform, opacity' }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-bms-surface/50 backdrop-blur-md border border-bms-border text-bms-warmGold text-sm font-medium mb-6 animate-pulse"
          >
            Admissions Open for 2026-27
          </motion.span>
          
          <KineticText 
            text="Engineer the Future." 
            className="text-6xl md:text-8xl lg:text-9xl font-display text-white mb-6 leading-tight justify-center flex-wrap" 
            delayStart={0.3} 
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-bms-cream font-sans font-light mb-12 text-balance mx-auto max-w-3xl drop-shadow-md"
          >
            BMSIT: Empowering innovators through world-class education, NAAC 'A' Grade excellence, and uncompromised autonomy.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/education" className="bg-bms-crimson hover:bg-red-700 text-white px-8 py-4 rounded-lg shadow-lg shadow-bms-crimson/20 text-lg font-medium transition-colors flex items-center gap-2">
                Explore Programs <ArrowRight size={20} />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/admissions" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg shadow-lg text-lg font-medium transition-colors">
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The rest of the content scrolls over the sticky hero */}
      <div className="bg-bms-nearBlack relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        
        {/* Stats Rail */}
        <section className="bg-bms-crimson py-12 text-white border-y border-red-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-red-800/50 text-center">
            {[ 
              { label: 'UG Intake', val: '1920+' },
              { label: 'Placements', val: '80%+' },
              { label: 'Accredited', val: "NAAC 'A'" },
              { label: 'Eco Campus', val: '25 Acres' }
            ].map((stat, i) => (
              <AnimatedContainer key={stat.label} delay={i * 0.1}>
                <div className="text-4xl md:text-5xl font-display mb-2">{stat.val}</div>
                <div className="text-sm font-sans uppercase tracking-widest opacity-80">{stat.label}</div>
              </AnimatedContainer>
            ))}
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-32 px-4 relative overflow-hidden">
          {/* subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bms-crimson/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedContainer direction="up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <KineticText text="Featured Programs" className="text-5xl font-display text-white mb-4" />
                <p className="text-bms-muted font-sans text-xl">Discover your progressive path at BMSIT.</p>
              </div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/education" className="flex items-center text-bms-warmGold hover:text-white transition-colors text-lg">
                  View All Programs <ChevronRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </AnimatedContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.length > 0 ? (
                programs.map((p, i) => (
                  <AnimatedContainer key={p.id} delay={i * 0.15}>
                    <motion.div 
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-bms-surface/80 backdrop-blur-xl rounded-2xl border border-white/5 p-8 shadow-2xl shadow-black/50 group cursor-pointer relative overflow-hidden flex flex-col h-full ring-1 ring-inset ring-white/10"
                    >
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <BookOpen size={80} className="text-bms-crimson" />
                      </div>
                      
                      <h3 className="text-3xl font-display text-white mb-4 relative z-10 leading-tight">{p.name}</h3>
                      
                      <div className="flex gap-3 mb-8">
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-bms-crimson/20 text-bms-crimson rounded-md ring-1 ring-bms-crimson/30">
                          {p.type}
                        </span>
                        {p.nba_accredited && (
                          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-bms-warmGold/20 text-bms-warmGold rounded-md ring-1 ring-bms-warmGold/30">
                            NBA
                          </span>
                        )}
                      </div>
                      
                      <div className="text-bms-muted text-sm border-t border-white/10 pt-6 flex justify-between mt-auto font-medium">
                        <span className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-bms-warmGold"></div>
                          Intake: {p.intake}
                        </span>
                        <span>{p.duration_years} Years</span>
                      </div>
                    </motion.div>
                  </AnimatedContainer>
                ))
              ) : (
                <AnimatedContainer className="col-span-3 text-center text-bms-muted py-24 border border-dashed border-white/10 rounded-2xl bg-bms-surface/30">
                  <div className="text-xl">Add programs in your Supabase Database to see them revealed here.</div>
                </AnimatedContainer>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
