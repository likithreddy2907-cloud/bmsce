import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Book, Award, Clock, Users, User, ArrowRight } from 'lucide-react';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { KineticText } from '../components/KineticText';
import { motion } from 'framer-motion';

interface Program {
  id: string;
  name: string;
  type: string;
  nba_accredited: boolean;
  intake: number;
  duration_years: number;
}

export function Academics() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const { data } = await supabase.from('programs').select('*').order('name');
      if (data) setPrograms(data);
    }
    fetchAll();
  }, []);

  const instructors = [
    { name: "Dr. Ananya Sharma", role: "HOD, Computer Science", exp: "15+ Years" },
    { name: "Prof. Rajesh Kumar", role: "AI/ML Researcher", exp: "10+ Years" },
    { name: "Dr. Vikram Singh", role: "Dean of Academics", exp: "20+ Years" },
    { name: "Prof. Priya Desai", role: "Cybersecurity Lead", exp: "8+ Years" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <KineticText text="Education at BMSIT&M" className="text-4xl md:text-6xl font-display text-white mb-10" />
      
      <AnimatedContainer direction="up" delay={0.2}>
        <div className="bg-bms-surface p-8 md:p-12 rounded-2xl border border-bms-border mb-20 shadow-2xl relative overflow-hidden backdrop-blur-sm bg-opacity-80">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bms-crimson via-bms-warmGold to-bms-crimson"></div>
          
          <p className="text-bms-cream text-xl md:text-2xl mb-12 leading-relaxed font-light drop-shadow">
            BMS Institute of Technology and Management (BMSIT&M), established in 2002, is a premier private engineering college in Bengaluru known for its high academic standards and industry-focused curriculum.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 text-bms-muted">
            {[
              {
                title: "Academics & Accreditation",
                desc: "It is an autonomous institution affiliated with Visvesvaraya Technological University (VTU) and is accredited with an 'A' grade by NAAC. The college follows Outcome-Based Education (OBE) and Project-Based Learning (PBL)."
              },
              {
                title: "Diverse Programs",
                desc: "The institute offers various undergraduate (BE) programs, including popular branches like Computer Science, AI & Machine Learning, and Information Science, as well as postgraduate courses like MCA, MBA, and M.Tech."
              },
              {
                title: "Industry Integration",
                desc: "Education at BMSIT is heavily integrated with industry through mandatory internships for both students and faculty, industry-supported labs, and technical talks from domain experts."
              },
              {
                title: "Research & Innovation",
                desc: "The college fosters a strong research culture with multiple VTU-recognised research centres and a dedicated Innovation Centre that supports student-led interdisciplinary projects."
              }
            ].map((feature, i) => (
              <AnimatedContainer key={i} direction="up" delay={0.3 + i * 0.1}>
                <div className="space-y-4 group">
                  <h3 className="text-bms-warmGold font-sans font-bold uppercase tracking-wider text-sm flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-bms-warmGold/50 group-hover:w-16 transition-all duration-300"></span> {feature.title}
                  </h3>
                  <p className="font-sans leading-relaxed text-base group-hover:text-white transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedContainer>
            ))}
            
            <AnimatedContainer direction="up" delay={0.7} className="space-y-4 md:col-span-2 border-t border-bms-border pt-8 mt-4 group">
              <h3 className="text-bms-warmGold font-sans font-bold uppercase tracking-wider text-sm flex items-center gap-3">
                <span className="w-8 h-[2px] bg-bms-warmGold/50 group-hover:w-16 transition-all duration-300"></span> Campus Environment
              </h3>
              <p className="font-sans leading-relaxed text-lg group-hover:text-white transition-colors duration-300 max-w-4xl">
                Students learn in a 25-acre "green campus" in Yelahanka, which features modern infrastructure including smart classrooms, well-equipped labs, and a vast digital library.
              </p>
            </AnimatedContainer>
          </div>
        </div>
      </AnimatedContainer>

      {/* Featured Campus Image */}
      <AnimatedContainer direction="none" delay={0.4}>
        <div className="w-full h-80 md:h-[500px] mb-20 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl group">
          <div className="absolute inset-0 bg-bms-nearBlack/40 z-10 transition-colors duration-700 group-hover:bg-transparent pointer-events-none"></div>
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            src="/bmsit3.jpg" 
            alt="BMSIT Campus" 
            className="w-full h-full object-cover"
          />
        </div>
      </AnimatedContainer>

      <div className="mb-20">
        <KineticText text="Our Academic Programs" className="text-4xl font-display text-white border-b border-bms-border pb-6 mb-10" />
        
        <AnimatedContainer direction="up">
          <div className="grid md:grid-cols-2 gap-12 bg-bms-surface/40 backdrop-blur-md p-10 rounded-2xl border border-white/5 shadow-2xl">
            <div>
              <h3 className="text-2xl font-display text-bms-warmGold mb-4 border-b border-bms-border/50 pb-3">Undergraduate Programs (B.E.)</h3>
              <p className="text-bms-muted text-base leading-relaxed mb-6">
                BMSIT offers comprehensive undergraduate Engineering programs, typically with an intake of 60-180 students per department:
              </p>
              <ul className="space-y-3 font-sans text-base">
                {[
                  "Artificial Intelligence and Machine Learning (AI&ML)",
                  "Computer Science and Engineering (CSE)",
                  "Computer Science and Business Systems (CSBS)",
                  "Electronics and Communication Engineering (ECE)",
                  "Information Science and Engineering (ISE)",
                  "Electrical and Electronics Engineering (EEE)",
                  "Mechanical Engineering",
                  "Civil Engineering"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-bms-cream hover:text-bms-warmGold transition-colors cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-bms-crimson"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-display text-bms-warmGold mb-4 border-b border-bms-border/50 pb-3">Postgraduate Programs</h3>
              <div className="space-y-8 mt-6">
                <AnimatedContainer delay={0.1}>
                  <strong className="text-white text-lg font-medium block mb-2">M.Tech:</strong>
                  <div className="text-bms-muted ml-4 border-l-2 border-bms-crimson pl-4 py-1 bg-bms-surface/30 rounded-r-lg">
                    Computer Science & Engineering, Cyber Security, and VLSI System Design.
                  </div>
                </AnimatedContainer>
                
                <AnimatedContainer delay={0.2}>
                  <strong className="text-white text-lg font-medium block mb-2">Master of Computer Applications (MCA)</strong>
                  <div className="text-bms-muted ml-4 border-l-2 border-bms-crimson pl-4 py-1 bg-bms-surface/30 rounded-r-lg">
                    Advanced computing, software development, and modern applications.
                  </div>
                </AnimatedContainer>
                
                <AnimatedContainer delay={0.3}>
                  <strong className="text-white text-lg font-medium block mb-2">Master of Business Administration (MBA)</strong>
                  <div className="text-bms-muted ml-4 border-l-2 border-bms-crimson pl-4 py-1 bg-bms-surface/30 rounded-r-lg">
                    Business leadership, management strategies, and corporate innovation.
                  </div>
                </AnimatedContainer>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>

      <KineticText text="Course Catalog" className="text-3xl font-display text-white mb-8" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {programs.map((prog, i) => (
          <AnimatedContainer key={prog.id} delay={i * 0.1} direction="up">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-bms-surface/80 p-8 rounded-xl border border-white/5 shadow-xl hover:shadow-bms-crimson/10 transition-all flex flex-col h-full group"
            >
              <h3 className="text-2xl font-display text-white mb-4 group-hover:text-bms-warmGold transition-colors">{prog.name}</h3>
              
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs text-bms-muted uppercase font-bold"><Award size={14} className="text-bms-crimson"/> Accredited</span>
                  <span className="text-sm text-bms-cream font-medium">{prog.nba_accredited ? 'NBA Yes' : 'No'}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs text-bms-muted uppercase font-bold"><Users size={14} className="text-bms-warmGold"/> Intake</span>
                  <span className="text-sm text-bms-cream font-medium">{prog.intake} Students</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs text-bms-muted uppercase font-bold"><Clock size={14} className="text-bms-crimson"/> Duration</span>
                  <span className="text-sm text-bms-cream font-medium">{prog.duration_years} Years</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs text-bms-muted uppercase font-bold"><Book size={14} className="text-bms-warmGold"/> Type</span>
                  <span className="text-sm text-bms-cream uppercase font-medium">{prog.type}</span>
                </div>
              </div>
              
              <div className="mt-auto pt-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex justify-center items-center gap-2 border border-bms-crimson text-bms-crimson hover:bg-bms-crimson hover:text-white py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  View Syllabus <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatedContainer>
        ))}

        {programs.length === 0 && (
          <div className="col-span-full py-20 text-center text-bms-muted border border-dashed border-white/10 rounded-xl bg-bms-surface/30">
            No programs found. Connect to Supabase to fetch data.
          </div>
        )}
      </div>

      {/* Instructor Profiles Section */}
      <div className="mb-20">
        <KineticText text="Distinguished Faculty" className="text-4xl font-display text-white border-b border-bms-border pb-6 mb-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, i) => (
            <AnimatedContainer key={i} direction="up" delay={i * 0.15}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-bms-surface to-bms-nearBlack p-6 rounded-2xl border border-white/5 relative overflow-hidden group shadow-lg"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-500">
                  <User size={100} className="text-bms-warmGold" />
                </div>
                <div className="w-16 h-16 bg-bms-nearBlack rounded-full flex items-center justify-center border-2 border-bms-warmGold/30 text-bms-warmGold mb-6 group-hover:border-bms-warmGold transition-colors">
                  <User size={28} />
                </div>
                <h4 className="text-xl font-display text-white mb-2">{instructor.name}</h4>
                <p className="text-bms-crimson text-sm font-medium mb-4">{instructor.role}</p>
                <p className="text-bms-muted text-sm flex items-center gap-2">
                  <Clock size={14} /> {instructor.exp} Experience
                </p>
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

    </div>
  );
}
