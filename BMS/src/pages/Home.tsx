import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ArrowRight, ChevronRight, BookOpen, MapPin } from 'lucide-react';
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
      
      {/* Scroll-Triggered Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden sticky top-0 -z-10">
        {/* Animated CSS background */}
        <ScrollHero3D />

        {/* Campus image with parallax overlay */}
        <motion.div
          className="absolute inset-0 z-[1]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <img
            src="/bmsit1.jpg"
            alt="BMS Institute of Technology & Management Campus"
            className="w-full h-full object-cover object-center"
          />
          {/* Layered dark overlays for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-bms-crimson/20 via-transparent to-transparent" />
        </motion.div>

        {/* Hero content */}
        <motion.div 
          className="relative z-10 text-center max-w-5xl px-4 pointer-events-auto"
          style={{ opacity: heroOpacity, y: heroY, willChange: 'transform, opacity' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-bms-surface/60 backdrop-blur-md border border-bms-warmGold/30 text-bms-warmGold text-sm font-medium">
              <MapPin size={13} />
              Yelahanka, Bangalore · Admissions Open 2026–27
            </span>
          </motion.div>
          
          <KineticText 
            text="Engineer the Future." 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-white mb-6 leading-tight justify-center flex-wrap" 
            delayStart={0.3} 
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-2xl text-bms-cream font-sans font-light mb-12 text-balance mx-auto max-w-3xl drop-shadow-md"
          >
            BMS Institute of Technology & Management — where NAAC 'A' Grade excellence meets 
            real-world innovation on a 25-acre green campus.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/education" className="bg-bms-crimson hover:bg-red-700 text-white px-8 py-4 rounded-lg shadow-lg shadow-bms-crimson/30 text-base md:text-lg font-medium transition-colors flex items-center gap-2">
                Explore Programs <ArrowRight size={20} />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/admissions" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-lg shadow-lg text-base md:text-lg font-medium transition-colors">
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-bms-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs uppercase tracking-widest font-sans">Scroll to explore</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-bms-warmGold to-transparent"
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </section>

      {/* The rest of the content scrolls over the sticky hero */}
      <div className="bg-bms-nearBlack relative z-10 shadow-[0_-20px_80px_rgba(0,0,0,0.9)]">
        
        {/* Stats Rail */}
        <section className="bg-bms-crimson py-10 md:py-12 text-white border-y border-red-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[ 
              { label: 'UG Intake', val: '1920+' },
              { label: 'Placements', val: '80%+' },
              { label: 'Accredited', val: "NAAC 'A'" },
              { label: 'Eco Campus', val: '25 Acres' }
            ].map((stat, i) => (
              <AnimatedContainer key={stat.label} delay={i * 0.1}>
                <div className="text-3xl md:text-5xl font-display mb-2">{stat.val}</div>
                <div className="text-xs md:text-sm font-sans uppercase tracking-widest opacity-80">{stat.label}</div>
              </AnimatedContainer>
            ))}
          </div>
        </section>

        {/* Campus Showcase Strip */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedContainer direction="up" className="mb-10">
              <KineticText text="Life on Campus" className="text-4xl md:text-5xl font-display text-white mb-3" />
              <p className="text-bms-muted font-sans text-lg">A green sanctuary of learning in Yelahanka, Bangalore.</p>
            </AnimatedContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {['/bmsit1.jpg', '/bmsit3.jpg', '/bmsit4.jpg', '/bmsit5.jpg'].map((src, i) => (
                <AnimatedContainer key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`overflow-hidden rounded-xl border border-white/5 ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  >
                    <img
                      src={src}
                      alt={`BMSIT Campus ${i + 1}`}
                      className={`w-full object-cover ${i === 0 ? 'h-64 md:h-80' : 'h-36 md:h-40'} transition-transform duration-700 group-hover:scale-105`}
                    />
                  </motion.div>
                </AnimatedContainer>
              ))}
            </div>
            <AnimatedContainer delay={0.4} className="mt-4">
              <Link to="/campus-life" className="inline-flex items-center gap-2 text-bms-warmGold hover:text-white transition-colors text-sm font-medium mt-2">
                Explore campus life <ChevronRight size={16} />
              </Link>
            </AnimatedContainer>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bms-crimson/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedContainer direction="up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <KineticText text="Featured Programs" className="text-4xl md:text-5xl font-display text-white mb-4" />
                <p className="text-bms-muted font-sans text-lg md:text-xl">Discover your progressive path at BMSIT.</p>
              </div>
              <motion.div whileHover={{ x: 5 }}>
                <Link to="/education" className="flex items-center text-bms-warmGold hover:text-white transition-colors text-lg">
                  View All Programs <ChevronRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </AnimatedContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                      
                      <h3 className="text-2xl md:text-3xl font-display text-white mb-4 relative z-10 leading-tight">{p.name}</h3>
                      
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
                          <div className="w-1.5 h-1.5 rounded-full bg-bms-warmGold" />
                          Intake: {p.intake}
                        </span>
                        <span>{p.duration_years} Years</span>
                      </div>
                    </motion.div>
                  </AnimatedContainer>
                ))
              ) : (
                <AnimatedContainer className="col-span-3 text-center text-bms-muted py-24 border border-dashed border-white/10 rounded-2xl bg-bms-surface/30">
                  <div className="text-xl">Loading programs from Supabase…</div>
                </AnimatedContainer>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
